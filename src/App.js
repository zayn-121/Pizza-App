import React from "react";
import ReactDom from "react-dom/client";
import spinaci from "../public/pizzas/spinaci.jpg";
import funghi from "../public/pizzas/funghi.jpg";
import margherita from "../public/pizzas/margherita.jpg";
import prosciutto from "../public/pizzas/prosciutto.jpg";
import salamino from "../public/pizzas/salamino.jpg";
import focaccia from "../public/pizzas/focaccia.jpg";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: focaccia,
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: margherita,
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: spinaci,
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: funghi,
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: salamino,
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: prosciutto,
    soldOut: false,
  },
];

const Header = () => {
  // const style = {color:'red', textTransform: 'uppercase', fontSize: '40px'}

  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
};

const Menu = () => {
  const pizzas = pizzaData;
  const numPizza = pizzas.length;
  return (
    <main className="menu">
      <h1>Our Menu</h1>
      {numPizza > 0 ?<ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul> : <p>We're still working on our menu. Please come back later :)</p>}
      
      {/* <Pizza
        photoName= {spinaci}
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        price= { 250 }
      />
      <Pizza
        photoName= {funghi}
        name="Pizza funghi"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        price= { 260 }
      /> */}
    </main>
  );
};

const Pizza = ({pizzaObj}) => {
  // console.log(props);
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={name}></img>
      <div>
        <h2>{pizzaObj.name}</h2>
        <p>{pizzaObj.ingredients}</p>
        <span> ₹ {pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // console.log(isOpen);

  return (
    <footer>
      {isOpen ? (
        <div className="order">
          <p>
            We're are open until {closeHour}
            :00 come visit us or order online.
          </p>
          <button className="btn">Order</button>
        </div>
      ): <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00</p>}
    </footer>
  );
};

const AppLayout = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
