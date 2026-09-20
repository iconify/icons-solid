import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t6vc3pwwm.css';
import '../../css/p/px5xiwqdn.css';
import '../../css/u/ux2n7ervq.css';
import '../../css/j/jlbwv3bdp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="t6vc3pwwm"/><circle class="px5xiwqdn"/><path class="ux2n7ervq"/><path class="jlbwv3bdp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:key-minimalistic-2-broken"} {...others} />);
}

export default Component;
