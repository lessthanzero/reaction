
import React from 'react';
import { render, Text, View } from 'react-sketchapp';
 
const Document = props =>
  <View>
    <Text>Hello world!</Text>
  </View>;
 
export default function (context) {
  render(<Document />, context);
}
