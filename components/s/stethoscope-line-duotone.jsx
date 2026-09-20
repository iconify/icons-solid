import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f3f4itibv.css';
import '../../css/q/q_e251bpo.css';
import '../../css/m/me86ccc_a.css';
import '../../css/x/x_jwp_bge.css';
import '../../css/y/yy3grib4x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="f3f4itibv"/><path class="q_e251bpo"/><circle class="me86ccc_a"/><path class="x_jwp_bge"/><path class="yy3grib4x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stethoscope-line-duotone"} {...others} />);
}

export default Component;
