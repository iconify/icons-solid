import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j55mge9fo.css';
import '../../css/c/cna71lbwk.css';
import '../../css/g/g3r_rtbqs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="j55mge9fo"/><path class="cna71lbwk"/><path class="g3r_rtbqs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:filter-close-broken"} {...others} />);
}

export default Component;
