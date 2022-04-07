import { View, Text, TextInput, Switch, Slider, StyleSheet } from "react-native";
import {useState} from 'react'
export default function App() {
  const [email, setEmail] = useState(0)
  const [password, setPassword] = useState(0)


  const changeMail = (e)=>{
      setEmail(e)
  }
  const changePass = (e)=>{
        setPassword(e)
  }
  
  const styles = StyleSheet.create({
    input : {
      borderWidth:1,
      borderColor:`${email.length>8?"green":"red"}`,
      width:300,
      height:40,
      borderRadius:30,
    },
    inputPass : {
      borderWidth:1,
      borderColor:`${password.length>8?"green":"red"}`,
      width:300,
      height:40,
      borderRadius:30,
    }
  })
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
        <View>
            <Text>Email</Text>
            <TextInput onChangeText={(e)=>{
              changeMail(e)
            }}editable style={styles.input}/>

          <Text>Mot de passe</Text>
          <TextInput secureTextEntry={true} onChangeText={(e)=>{
              changePass(e)
            }}editable style={styles.inputPass}/>
        </View>
    </View>
  );
}