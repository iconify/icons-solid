import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/frg4agggy.css';
import '../../css/u/u_gvbhbmw.css';
import '../../css/x/x07ftrzei.css';
import '../../css/w/w4qe5y36z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="frg4agggy"/><path class="u_gvbhbmw"/><path class="x07ftrzei"/><path class="w4qe5y36z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:move-vertical-broken"} {...others} />);
}

export default Component;
