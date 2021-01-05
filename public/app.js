// toggle menu or darkmode
class toggle {}

// display inputs and result
class Display {
	constructor(displayId) {
		this.displayId = displayId;
	}

	displayInputFunction(input) {
		const inputSection = document.querySelector(`#${this.displayId}`);
		this.outputVal = "20,000"; //here will be dynamically feed by a method
		const currOutput = this.outputVal;

		if (currOutput === "0") {
			inputSection.textContent = input;
			return;
		}
		inputSection.textContent += input;
	}

	get outputVal() {
		return this.displayValue;
	}

	set outputVal(outputChange) {
		const displaySection = document.querySelector("#result");
		if (!outputChange) {
			this.displayValue = displaySection.textContent;
			return;
		}
		this.displayValue = outputChange;
		displaySection.textContent = this.displayValue;
	}
}

class Operation {
	// constructor(action) {
	// 	this.action = action;
	// }
	static keyOperation(action) {
		if (action === "add") {
			console.log("add");
		}
		if (action === "subtract") {
			console.log("subtract");
		}
		if (action === "divide") {
			console.log("divide");
		}
		if (action === "multiply") {
			console.log("multiply");
		}
	}

	static keyUtility(action) {
		if (action === "clear") {
			console.log("clear");
		}
		if (action === "delete") {
			console.log("delete");
		}
		if (action === "calculate") {
			console.log("calculate");
		}
		if (action === "bracket") {
			console.log("bracket");
		}
		if (action === "decimal") {
			console.log("decimal");
		}
	}
}

class NumberKey {
	// constructor(key) {
	// 	this.key = key;
	// }
	static numFunction(key) {
		const keyLog = key.textContent;
		console.log(keyLog);
		const inputsDisplay = new Display("inputs");
		inputsDisplay.displayInputFunction(keyLog);
		const resultDisplay = new Display("result");
	}
}

class ButtonAction {
	constructor(e) {
		this.key = e.target;
		this.action = this.key.dataset.action;
		this.validateAction();
	}

	validateAction() {
		if (!this.action) {
			NumberKey.numFunction(this.key);
		} else if (
			this.action === "add" ||
			this.action === "subtract" ||
			this.action === "multiply" ||
			this.action === "divide"
		) {
			Operation.keyOperation(this.action);
		} else if (
			this.action === "decimal" ||
			this.action === "clear" ||
			this.action === "calculate" ||
			this.action === "bracket" ||
			this.action === "delete"
		) {
			Operation.keyUtility(this.action);
		}
	}
}

// button
class Button {
	constructor() {
		const calculator = document.getElementById("calculator");
		const keys = calculator.querySelector("#keys");
		keys.addEventListener("click", this.btnSelectFunction.bind(this));
	}

	btnSelectFunction(e) {
		if (e.target.matches("button")) {
			new ButtonAction(e);
		}
	}
}

// render app
class App {
	static init() {
		const btn = new Button();
	}
}

App.init(); //App is rendered :)
