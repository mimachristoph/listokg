import logo from './Listo_Logo.svg';
//import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import './App.css';
import { useEffect, useState } from "react";

function App() {
  return (
    <>   
      <header className="App-header">
        <img src={logo} className="" alt="logo" />
      </header>

<body>
      <Navbar bg="light" expand="lg">
      <Container>
     
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#eins">Link</Nav.Link>
            <Nav.Link href="#zwei">Link</Nav.Link>
            <Nav.Link href="#drei">Link</Nav.Link>
            <Nav.Link href="#vier">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>





  <Container>

    <Row>
    <div id="eins">
      <h1 className="Heading">Silikonbeschichtungen</h1>
      <p>Unser Fachgebiet ist das Beschichten von Textilien mit Silikon,<br />sowohl für Strumpfbänder als auch für medizinische und technische Bereiche.</p>
    </div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./static/img/silicon/listo1.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./static/img/silicon/listo2.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./static/img/silicon/listo3.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./static/img/silicon/listo4.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./static/img/silicon/listo5.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>



    </Carousel>

</Row>
  </Container>


  <Container>

    <Row>

    <div id="zwei">
      <h1 className="Heading">Elastische Spitzen und Bänder</h1>
      <p>Wir bieten eine große Auswahl an hochwertigen Spitzen und Bändern für Strumpf- und Wäscheproduzenten.</p>
    </div>

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./static/img/silicon/listo1.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./static/img/silicon/listo2.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./static/img/silicon/listo3.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./static/img/silicon/listo4.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./static/img/silicon/listo5.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>



    </Carousel>

    </Row>
  </Container>

<Container><Row> 

    <div id="drittes">
      <h1 className="Heading">warmconform® Wärmeprodukte & COOL CAPS </h1>
      <p>Gesundheit erhalten.
Sorge vor – investiere in Deine Gesundheit!</p>
    </div>

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./static/img/silicon/listo1.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./static/img/silicon/listo2.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./static/img/silicon/listo3.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./static/img/silicon/listo4.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./static/img/silicon/listo5.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>



    </Carousel>

    </Row></Container>

<Container><Row>
    <div id="kontakt">
      <h1 className="Heading">KONTAKT & IMPRESSUM  </h1>
      <p>LISTO e.U.<br />
Manfred Köllinger<br />
Rasis Bündt 10<br />
A-6890 Lustenau<br /><br />

Tel: +43 (0) 664 110 5440<br />
office@listo-kg.com<br />
manfred.koellinger@listo-kg.com<br />
www.listo-kg.com</p>

    </div>
    </Row></Container>
    

    </body>

    </>

  );
}

export default App;
