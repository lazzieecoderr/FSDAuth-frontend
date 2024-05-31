import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { username, email, password,role };
    await axios
      .post("http://localhost:5000/api/user/register-user", payload)
      .then((res) => {
        toast.success(res.data.message)
        navigate("/login")
      })
      .catch((error) => {
        console.log(error);
       toast.error(error.response.data.message);
      });
    
      setEmail('')
      setPassword('')
      setUsername('')
      setRole('')
      
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>
            <strong>User Registration</strong>
          </legend>
          <p>
            <label htmlFor="username">User Name:</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Your Name"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Mail Id"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="password">Role:</label>
            <input
              type="text"
              name="role"
              id="role"
              placeholder="Enter user role"
              required
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </p>
          <button type="submit">Register</button>
        </fieldset>
      </form>
      <br />
          <br />
      <button><Link to='/'>Back</Link></button>
          <br />
      <button><Link to='/login'>Login</Link></button>
    </div>
  );
};

export default Register;
