import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x_jwp_bge.css';
import '../../css/a/a0gtrrbuj.css';
import '../../css/m/mhrx-fb4o.css';
import '../../css/h/hk3yrq41f.css';
import '../../css/w/wruedxb7y.css';
import '../../css/f/fw0v9lbrp.css';
import '../../css/t/tiz_macsu.css';
import '../../css/v/vwck1pjsf.css';
import '../../css/d/dvs6ehbur.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="x_jwp_bge"/><path class="a0gtrrbuj"/><path class="mhrx-fb4o"/><path class="hk3yrq41f"/><path class="wruedxb7y"/><path class="fw0v9lbrp"/><path class="tiz_macsu"/><path class="vwck1pjsf"/><path class="dvs6ehbur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-shine-broken"} {...others} />);
}

export default Component;
