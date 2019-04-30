import React, { Component } from "react";
import { connect } from "react-redux";

import { convertToDoc } from "../../actions";

export class ConverterButton extends Component {
  onClickConvertButton = e => {
    this.props.dispatch(convertToDoc());
  };

  render() {
    return (
      <div className="resume-tools-resume-editor">
        <button
          onClick={this.onClickConvertButton}
          className={this.props.showDownloadButton ? "download-btn-style" : ""}
        >
          {this.props.showDownloadButton ? "Download as MS Word" : "Convert"}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showDownloadButton: state.tools.showDownloadButton
});

const ConnectedConverterButton = connect(mapStateToProps)(ConverterButton);
export default ConnectedConverterButton;
