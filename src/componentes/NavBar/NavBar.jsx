import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    const logo = "../src/assets/logo_eg.png"
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <img className='imgLogo' src={logo} alt="Logo Empire Game" />
            <span className="navbar-brand" href="#">Empire Game</span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item btn">
                    Inicio
                </li>
                <li className="nav-item btn">
                    Promociones
                </li>
                <li className="nav-item btn">
                    Por Consola
                </li>
                <li className="nav-item btn">
                    Preventa
                </li>
            </ul>
            </div>
            <CartWidget/>
        </div>
    </nav>

  
  )
}

export default NavBar
