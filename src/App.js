import React, { Component } from "react";
import "./App.css";

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobcode:null,
      firstName: null,
      lastName: null,
      notes:null,
      technologies:null,
      noticeperiod:null,
      salaryasked:null,      
      
      formErrors: {
        jobcode:"",
        firstName: "",
        lastName: "",
        notes:"",
      technologies:"",
      noticeperiod:"",
      salaryasked:""
        
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Job Code: ${this.state.jobcode}
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Notes: ${this.state.notes}
        Technologies: ${this.state.technologies}
        Notice Period: ${this.state.noticeperiod}
        Salary Asked: ${this.state.salaryasked}        
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;

      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create Account</h1>
          <form onSubmit={this.handleSubmit} noValidate>

            <div className="jobcode">
              <label htmlFor="jobcode">Job Code</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="Job Code"
                type="text"
                name="jobcode"
                noValidate
                onChange={this.handleChange}
              />
             
            </div>

            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="First Name"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>

            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Last Name"
                type="text"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>

          <div className="notes">
            <label htmlFor="notes">Notes</label>
            <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="Notes"
                type="text"
                name="notes"
                noValidate
                onChange={this.handleChange}
              />
              
          </div>

          <div className="technologies">
            <label htmlFor="technologies">Technologies</label>
            <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="Technologies"
                type="text"
                name="technologies"
                noValidate
                onChange={this.handleChange}
              />
              
          </div>
          
          <div className="noticeperiod">
            <label htmlFor="noticeperiod">Notice Period</label>
            <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="Notice Period"
                type="text"
                name="noticeperiod"
                noValidate
                onChange={this.handleChange}
              />
              
          </div>

          <div className="salaryasked">
            <label htmlFor="salaryasked">Salary Asked</label>
            <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="Salary Asked"
                type="text"
                name="salaryasked"
                noValidate
                onChange={this.handleChange}
              />
              
          </div>

            <div className="createAccount">
              <button type="submit">Create Account</button>
              
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
