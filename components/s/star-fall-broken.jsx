import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/i/iylu1y18v.css';
import '../../css/o/on6khhbhh.css';
import '../../css/t/ti3g_bcpn.css';
import '../../css/q/qryul2gig.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="iylu1y18v"/><path class="on6khhbhh"/><path class="ti3g_bcpn"/><path class="qryul2gig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-fall-broken"} {...others} />);
}

export default Component;
