import React, {useEffect, useState} from 'react'

const App = () => {
  
  const [backenData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch('/api').then(
      response => response.json()
    ).then(
      data => setBackendData(data)
      )
  },[])
  
  return (
    <div>
      
      {
        (typeof backenData.users === 'undefined') ?
        ( <p>loading.....</p>) :
        (backenData.users.map((user,i) => 
        <div key={i}> 
        <table class="table">
  <thead>
    <tr>
      <th scope="col">nombre</th>
      <th scope="col">correo</th>
      <th scope="col">contraseña</th>
      <th scope="col">fecha de nacimiento</th>
      <th scope="col">genero</th>
      <th scope="col">localisacion</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
        <td>{user.username}</td>
        <td>{user.password}</td>
        <td>{user.date_of_birth}</td>
        <td> {user.gender}</td>
        <td>{user.location} </td>
        <td>{user.email}</td>
        
    </tr>
  </tbody>
</table>

        </div>))
      }


    </div>
  )
}

export default App
