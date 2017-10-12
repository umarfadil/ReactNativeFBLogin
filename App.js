/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {LoginButton, AccessToken} from 'react-native-fbsdk';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          React Native Facebook Login
        </Text>
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={(error, result) => {
            if (error) {
              alert("Login failed with error: " + error.toString());
            } else if (result.isCancelled) {
              alert("Login was cancelled");
            } else {
              alert("Login was a success", result.grantedPermissions.toString());
            }
          }}
          onLogoutFinished={() => {
            alert("User logged out");
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
