import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xpzbxokqs.css';
import '../../css/t/ti-8hxbru.css';
import '../../css/g/gf8hoxv3z.css';
import '../../css/n/nv6qhg7zp.css';
import '../../css/l/lbfuos7ub.css';
import '../../css/k/km125xbck.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xpzbxokqs"/><path class="ti-8hxbru"/><path class="gf8hoxv3z"/><path class="nv6qhg7zp"/><path class="lbfuos7ub"/><path class="km125xbck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:garage-linear"} {...others} />);
}

export default Component;
