import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
	// create a state variable here
     const [people , setPeople] = useState(data);
     const [btn, setBtn] = useState('Clear All');
	// this should clear all records
	function clearAllRecords() {
        setPeople(val => val === data ? [] : data)
        setBtn (e => e === 'Clear All' ? e = 'Show All': e = "Clear All")
    }
	return (
		<main>
			<section className="container">
				{/* change this to state variable data */}
				<h3>{people.length} birthdays today</h3>
				<List people={people} />
				<button onClick={clearAllRecords}>{btn}</button>
			</section>
		</main>
	)
}

export default App
