import React, { Component } from 'react';

class Review extends Component {

  handleClick(event) {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.review.id
    });
  }

  render() {
    return (
      <div>
        <li>
          {this.props.review.text}  <button onClick={(event) => this.handleClick(event)}>delete</button>
        </li>
      </div>
    );
  }
};

export default Review;
