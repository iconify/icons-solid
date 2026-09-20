import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fo311mbdk.css';
import '../../css/f/f5r1qi0_e.css';
import '../../css/t/tb3176osp.css';
import '../../css/x/xk1n0w2qu.css';
import '../../css/x/x1fsbwbzn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="fo311mbdk"/><path class="f5r1qi0_e"/><path class="tb3176osp"/><path class="xk1n0w2qu"/><path class="x1fsbwbzn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:benzene-ring-broken"} {...others} />);
}

export default Component;
