import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rbwmgp1nx.css';
import '../../css/w/wh07c6bhb.css';
import '../../css/c/c7_d72tdc.css';
import '../../css/e/e_w-t6bwn.css';
import '../../css/r/rjk8xfbbv.css';
import '../../css/f/f066lccuw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="rbwmgp1nx"/><path class="wh07c6bhb"/><path class="c7_d72tdc"/><path class="e_w-t6bwn"/><path class="rjk8xfbbv"/><path class="f066lccuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:server-minimalistic-line-duotone"} {...others} />);
}

export default Component;
