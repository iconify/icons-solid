import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xm-1off4h.css';
import '../../css/d/dg5sb_lqv.css';
import '../../css/n/n4nm1ab_l.css';
import '../../css/e/e_w-t6bwn.css';
import '../../css/r/rjk8xfbbv.css';
import '../../css/f/f066lccuw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xm-1off4h"/><path class="dg5sb_lqv"/><path class="n4nm1ab_l"/><path class="e_w-t6bwn"/><path class="rjk8xfbbv"/><path class="f066lccuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:server-minimalistic-line-duotone"} {...others} />);
}

export default Component;
