
import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpeg';
import banner2 from '../../../images/banner/banner2.jpeg';
import banner3 from '../../../images/banner/banner3.jpeg';


const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    style={{width: '100%', height: '90vh'}}
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                    />
                    <Carousel.Caption style={{marginBottom: '200px'}}>
                    <h2>First slide label</h2>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{width: '100%', height: '90vh'}}
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                    />

                    <Carousel.Caption style={{marginBottom: '200px'}}>
                    <h2>Second slide label</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{width: '100%', height: '90vh'}}
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                    />

                    <Carousel.Caption style={{marginBottom: '200px'}}>
                    <h2>Third slide label</h2>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;