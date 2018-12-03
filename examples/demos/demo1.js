import React, { Component } from 'react';
import {
    Row,
    Col
} from '../../src/index';


export default class DEMO extends Component {


    render() {
        return (
            <div>
                <Row gutter={8}>
                    <Col span={12}><div>col-12</div></Col>
                    <Col span={12}><div>col-12</div></Col>
                </Row>
                <Row>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                </Row>
                <Row>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col>col-?</Col>
                </Row>
            </div >
        );
    }

}
