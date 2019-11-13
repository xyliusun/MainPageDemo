import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

export default function App () {
  return (
    <ScrollView
      style={{ backgroundColor: '#faf' }}
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', backgroundColor: '#aaf' }}
    >

      <View style={{ backgroundColor: '#fa0', height: 400, justifyContent: 'center', alignItems: 'center' }} >
        <Text>{'Header'}</Text>
      </View>

      <View >
        <View style={{ backgroundColor: '#ff0', height: 100, justifyContent: 'center', alignItems: 'center' }} >
          <Text>{'Card'}</Text>
        </View>
        <View style={{ backgroundColor: '#0f0', height: 100, justifyContent: 'center', alignItems: 'center' }} >
          <Text>{'Card'}</Text>
        </View>

        {/* <View style={{ backgroundColor: '#ff0', height: 100, justifyContent: 'center', alignItems: 'center' }} >
          <Text>{'Card'}</Text>
        </View>
        <View style={{ backgroundColor: '#0f0', height: 100, justifyContent: 'center', alignItems: 'center' }} >
          <Text>{'Card'}</Text>
        </View>

        <View style={{ backgroundColor: '#ff0', height: 100, justifyContent: 'center', alignItems: 'center' }} >
          <Text>{'Card'}</Text>
        </View>
        <View style={{ backgroundColor: '#0f0', height: 100, justifyContent: 'center', alignItems: 'center' }} >
          <Text>{'Card'}</Text>
        </View> */}
      </View>

    </ScrollView>
  )
}