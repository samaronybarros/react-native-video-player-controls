module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  rules: {
    'react-native/no-inline-styles': 0, // This rules is for removing the need to create styles
    'no-control-regex': 0, // This rule inactivates the Regular Expression validation
  },
}
