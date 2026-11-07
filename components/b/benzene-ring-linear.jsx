import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k7vqiwbtv.css';
import '../../css/f/f5r1qi0_e.css';
import '../../css/t/tb3176osp.css';
import '../../css/x/xk1n0w2qu.css';
import '../../css/t/tz1agk9et.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="k7vqiwbtv"/><path class="f5r1qi0_e"/><path class="tb3176osp"/><path class="xk1n0w2qu"/><path class="tz1agk9et"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:benzene-ring-linear"} {...others} />);
}

export default Component;
