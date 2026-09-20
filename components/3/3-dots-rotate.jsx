import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v4i2ew1ke.css';
import '../../css/i/ikn_sw-ck.css';
import '../../css/q/qadltybwf.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="v4i2ew1ke"/><g><circle class="ikn_sw-ck"/><circle class="qadltybwf"/><animateTransform attributeName="transform" calcMode="spline" dur="1s" keySplines=".36,.6,.31,1;.36,.6,.31,1" repeatCount="indefinite" type="rotate" values="0 12 12;180 12 12;360 12 12"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"svg-spinners:3-dots-rotate"} {...others} />);
}

export default Component;
