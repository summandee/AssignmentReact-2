//Assignment-6:Make a class based component .
// use state and display state values in your component

import { Component } from "react";


  class StudentsInfo extends Component{

render(){
        this.state ={
                fname:"Mohammad Ali",
                lname:"Mughal",
                  roll:11,
                  skills:"MCS"
            }        

      return(
          <>    
          <div className="container">
          <div class="card bg-info text-white">
          <div class="card-body"> <h2>Students's Info</h2></div>
          </div>
          
          <ul class="list-group">
          <div class="card bg-secondary text-white">
          <div class="card-body"><h4>Student FullName is : {this.state.fname} </h4></div>
          </div>

          <div class="card bg-secondary text-white">
          <div class="card-body"> <h4> Student LastName is : {this.state.lname}</h4></div>
          </div>

          <div class="card bg-secondary text-white">
          <div class="card-body"><h4>Student's Roll.no is : {this.state.roll}</h4></div>
          </div>

          <div class="card bg-secondary text-white">
          <div class="card-body"><h4>Student's skills : {this.state.skills}</h4></div>
          </div>
          
        </ul>
      </div>


                                                           
                   
                     </>
                )
    }

}
export default StudentsInfo;