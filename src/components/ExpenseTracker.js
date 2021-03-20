import React, { useState } from "react";

function ExpenseTracker() {
  const [balance, setBalance] = useState(0);
  const [amountOfTxn, setAmountOfTxn] = useState("");
  const [transactions, setTransactions] = useState([]);

  const handleChange = (e) => {
    setAmountOfTxn(e.target.value);
  };

  const handleClick = (e) => {
    if (e.target.value === "Add") {
      setBalance(balance + parseInt(amountOfTxn));
    } else if (e.target.value === "Remove") {
      setBalance(balance - parseInt(amountOfTxn));
    }

    const transaction =
      new Date().toISOString() + " - " + amountOfTxn + " - " + e.target.value;
    const newTransactions = [...transactions];
    newTransactions.push(transaction);
    setTransactions(newTransactions);
  };

  return (
    <div className="app">
      <div className="container">
        <p className="title">Expense Tracker - Basic</p>
        <div className="expense-details">
          <p className="sub-title">Balance: {balance}</p>
          <input type="number" value={amountOfTxn} onChange={handleChange} />
          <div className="buttons">
            <button onClick={handleClick} value="Add">
              Add
            </button>
            <button onClick={handleClick} value="Remove">
              Remove
            </button>
          </div>
        </div>
        <div className="transactions">
          <p className="sub-title">Transactions:</p>
          <div className="transaction-list">
            {transactions.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseTracker;
