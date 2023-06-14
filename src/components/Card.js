import React, { useState } from "react";

const NumberSorter = () => {
  const [numbers, setNumbers] = useState([2, 5, 1, 8, 6, 40, 9, 2, 19, 2]);
  const [sortedNumbers, setSortedNumbers] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  const handleSortNumbers = () => {
    const sorted = [...numbers].sort((a, b) => a - b);
    setSortedNumbers(sorted);
    setIsSorted(true);
  };

  return (
    <div>
      <h2>Lista de Números</h2>
      <ul>
        {isSorted ? (
          sortedNumbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))
        ) : (
          numbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))
        )}
      </ul>
      <button onClick={handleSortNumbers}>
        {isSorted ? "Lista Ordenada" : "Ordenar Números"}
      </button>
    </div>
  );
};

export default NumberSorter;
