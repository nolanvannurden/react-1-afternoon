import React, {Component} from 'react';
class FilterString extends Component{
	constructor(){
		super();

		this.state = {
			names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
			userinput: '',
			filteredNames: []
		};
	}

	handleChange(value){
		this.setState({userInput: value});
	}

	filterNames(userInput){

	}

	render(){
		return(
			<div className="puzzleBox filterStringPB">
				<span className="puzzleText"> Names: { JSON.stringify(this.state.names, null, 10) } </span>
				<input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
				<button className="confirmationButton" onClick={() => this.filterNames(this.state.userInput)}> Filter </button>
				<span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredNames, null, 10) } </span>
			</div>
		)
	}
}
export default FilterString;