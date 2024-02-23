import React, { useState } from 'react'
import "./Form.css";




export default function Form() {
          const [data, setData] = useState({ user: "", pass: "", num: "", mail: "", });
          function hanldeOutput() {
            console.log(data);
            let arr = [];
            for (let i in data) {
              arr.push(data[i]);
            }
            console.log(arr);
            alert("Welcome " + data.user);
          }    
  return (
    <div className='box'>
  <form  className='container' onSubmit={hanldeOutput} >
  
<div className="row mb-2">
  <label htmlFor="colFormLabel1"   className="col-sm-3 col-form-label" >User ID:</label>
  <div className="col-sm-5">
    <input type="text" className="form-control" id="colFormLabel1" value={data.user}  placeholder="👤@abc_123" required onChange={(e) => setData({ ...data, user: e.target.value })} />
  </div>
</div>

<div className="row mb-4">
  <label htmlFor="colFormLabel2" className="col-sm-3 col-form-label">Password</label>
  <div className="col-sm-5">
    <input type="password" className="form-control" id="colFormLabel2" value={data.pass} placeholder="Password" required  onChange={(e) => setData({ ...data, pass: e.target.value })} />
  </div>
</div>

<div className="row mb-4">
  <label htmlFor="colFormLabel3" className="col-sm-3 col-form-label">Phone Number</label>
  <div className="col-sm-5">
    <input type="number" className="form-control" id="colFormLabel3" value={data.num}   placeholder="+91" required  onChange={(e) => setData({ ...data, num: e.target.value })} />
  </div>
</div>

<div className="row mb-4">
  <label htmlFor="colFormLabel4" className="col-sm-3 col-form-label">Email Id:</label>
  <div className="col-sm-5">
    <input type="email" className="form-control" id="colFormLabel4" value={data.mail} placeholder="abc@gmail.com" required onChange={(e) => setData({ ...data, mail: e.target.value })} />
  </div>
</div>
<div className="d-grid gap-4 col-3">
 
<button  className="btn btn-primary">
  Update
</button>


 
</div>
</form>


    </div>
  )
}



