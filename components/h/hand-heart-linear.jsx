import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fmgl-eb6q.css';
import '../../css/m/mzutnyh9s.css';
import '../../css/l/lqpy27syi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="fmgl-eb6q"/><path class="mzutnyh9s"/><rect class="lqpy27syi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hand-heart-linear"} {...others} />);
}

export default Component;
