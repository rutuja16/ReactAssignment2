import React, { Component } from "react";
import './form.css'
class FeedBackForm extends Component{

    state ={
        name:"",
        dept:"",
        rating:"",
        employee:[],
        showEmp:false
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    handleClick=(e)=>{
        e.preventDefault();
        const empData=[...this.state.employee]
        empData.push({name:this.state.name, dept:this.state.dept, rating:this.state.rating});
        this.setState({ employee: empData, showEmp:true, name: "", dept: "" , rating: ""});
        console.log(empData)

        // e.preventDefault()
        // const empData = [...this.state.employee]
        // empData.push({ name: this.state.name, contact: this.state.contact, rating: this.state.rating })
        // this.setState({ employee: empData, showComponent:true, name: "", dept: "" , rating: ""})
    }   
    
    render(){
        return(
            <div class="formdata">
                <h1>Employee Feedback Form</h1>
                <form onSubmit={this.handleClick}>
                    <label className="label">Name :</label> 
                    <input value={this.state.name} id="name" onChange={this.handleChange} required />
                    <br/><br/>

                    <label>Department :</label> 
                    <input value={this.state.dept} id="dept" onChange={this.handleChange} required/>
                    <br/><br/>

                    <label>Rating :</label> 
                    <input value={this.state.rating} id="rating" onChange={this.handleChange} required />
                    <br/><br/>

                    <button className="button1" style={{fontSize:"25px"}}>Submit</button>

                </form>

                <div className="mainDiv">
                    {this.state.employee.map((value, index) => {
                        return (
                            <div key={index} className="data">
                            <br/>
                            Name : {value.name} | Department : {value.dept} | Rating : {value.rating}
                            </div>
                            )
                    })}
                </div>

            </div>
        )
    }
}
export default FeedBackForm

