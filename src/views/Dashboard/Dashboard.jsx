import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col, DropdownButton, MenuItem, Table, Modal, Button } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";

class Dashboard extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
    show: false
    }
   this.handleShow = this.handleShow.bind(this);
   this.handleClose = this.handleClose.bind(this);
  }
handleClose() {
  this.setState({
    show: false
  });
}

handleShow() {
  this.setState({
    show: true
  });
}
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    var dataBar = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [
        [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
      ]
    };
    var optionsBar = {
      seriesBarDistance: 10,
      axisX: {
        showGrid: false
      },
      height: "245px"
    };
    var responsiveBar = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];

    const thArray = [<h5><b>SNo</b></h5>, <div><h5><b>Mine <input style={{float:"right"}} name="search Mine" placeholder="Search Mine"/></b></h5></div>, <h5><b>Location</b></h5>];

    const tdArray = [
      ["1", <span onClick={this.handleShow} style={{cursor:"pointer"}}>Mine 1</span>, "$36,738"],
      ["2",  <span onClick={this.handleShow} style={{cursor:"pointer"}}>Mine 2</span>, "$23,789"],
      ["3",  <span onClick={this.handleShow} style={{cursor:"pointer"}}>Mine 3</span>, "$56,142"],
      ["4",  <span onClick={this.handleShow} style={{cursor:"pointer"}}>Mine 4</span>,"$38,735"],
    ];

    return (
      <div className="content">
      
        <Grid fluid>
       
          <Row>
            <Col lg={12} sm={12}>
              <Card
              id = "welcome"
              title = "OSPCB Dashboard"
              category = "Lorem"
              stats = "Lorem Ipsum"

              />
            </Col>
          {/*  <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-wallet text-success" />}
                statsText="Revenue"
                statsValue="$1,345"
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Last day"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-danger" />}
                statsText="Errors"
                statsValue="23"
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="In the last hour"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-twitter text-info" />}
                statsText="Followers"
                statsValue="+45"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Users Behavior"
                category="24 Hours performance"
                stats="Updated 3 minutes ago"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataSales}
                      type="Line"
                      options={optionsSales}
                      responsiveOptions={responsiveSales}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendSales)}</div>
                }
              />
            </Col>
            <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Email Statistics"
                category="Last Campaign Performance"
                stats="Campaign sent 2 days ago"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPie} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie)}</div>
                }
              />
            </Col>
              */}
          </Row>

          <Row>
            <Col md={12}>
              <Card
                id="AirQuality"
                title = "AirQuality"
                category="All mines AQI Included"
                stats="Data information certified"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataBar}
                      type="Bar"
                      options={optionsBar}
                      responsiveOptions={responsiveBar}
                    />
                  </div>
                }
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Card
                id="analysis"
                title="Analysis"
                category = "Analysis"
                content={
                  <div className="ct-chart">
                    <DropdownButton 
                    md={12} lg={4} xs={12} xl={4}
                    title="All Mines" 
                    >
                    <MenuItem eventKey="1">All Mines</MenuItem>
                    <MenuItem eventKey="2">ABC</MenuItem>
                    <MenuItem eventKey="3">ABC2</MenuItem>
                    </DropdownButton>
                      <div className="row">
                        <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12" style={{ maxHeight:"320px" }}>
                          <ChartistGraph
                          data={dataBar}
                          type="Bar"
                          options={optionsBar}
                          responsiveOptions={responsiveBar}
                          />
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12" style={{ maxHeight:"320px" }}>
                          <ChartistGraph
                          data={dataBar}
                          type="Bar"
                          options={optionsBar}
                          responsiveOptions={responsiveBar}
                          />
                        </div>
                          <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12" style={{ maxHeight:"320px" }}>
                          <ChartistGraph
                          data={dataBar}
                          type="Bar"
                          options={optionsBar}
                          responsiveOptions={responsiveBar}
                          />
                        </div>
                      </div>
                </div>
                }
              />    
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Card
                id="MineView"
                title = "Mine View"
                category="All mines View"
                content={
                  <div className="ct-chart">
                    <Table hover>
                        <thead>
                            <tr>
                                {
                                    thArray.map((prop, key) => {
                                        return (
                                        <th  key={key}>{prop}</th>
                                        );
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tdArray.map((prop,key) => {
                                    return (
                                        <tr key={key}>{
                                            prop.map((prop,key)=> {
                                                return (
                                                    <td  key={key}>{prop}</td>
                                                );
                                            })
                                        }</tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                  </div>
                }
              />
            </Col>
          </Row>          
        </Grid>
        
         {this.state.show && <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
              </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>}
      </div>
    );
  }
}

export default Dashboard;
