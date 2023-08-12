import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0

  };



  componentDidUpdate() {
      console.log("random-text");
    }
  render() {
    
    return (
      <div>
        <span className={this.getBaadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-success m-2"
        >
          Increment
        </button>

        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }

  getBaadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  handleIncrement = () => {
    this.setState({count: this.state.count + 1})
  }

}

export default Counter;