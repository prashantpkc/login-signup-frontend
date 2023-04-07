import React,{useState,useEffect} from 'react'
import CustomInput from '../../Atom/Input/CustomInput'
import CustomButton from '../../Atom/Button/CustomButton'
import './Login.css'
import axios from 'axios'

function Login() {
   const [email, setEmail]=useState('')
   const [password,setPassword]=useState('')
   const [user,setUser] = useState([])
   const [newUser,setNewUser] = useState([])


   let handleSubmit = async(e)=>{
      
      e.preventDefault()
      let data = {
        email: email,
        password: password
      }
      await axios.post("http://localhost:5000/login", data).then((data)=>{
        console.log(data)
      })
   }

  return (
    <div className='login__form'>
      <h1>login Page</h1>
      
      <CustomInput value={email} placeholder='Email' onChange={(e)=> setEmail(e.target.value)}/>
      <CustomInput value={password} placeholder='Paswword' onChange={(e)=> setPassword(e.target.value)}/>
      <CustomButton onClick={handleSubmit} text='submit'/>
    </div>
  )
}

export default Login

