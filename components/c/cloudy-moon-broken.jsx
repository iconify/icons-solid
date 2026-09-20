import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i78bhubvt.css';
import '../../css/l/lc-1m4bvp.css';
import '../../css/e/e78qg7bkf.css';
import '../../css/k/kros7mbvb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="i78bhubvt"/><path class="lc-1m4bvp"/><path class="e78qg7bkf"/><path class="kros7mbvb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloudy-moon-broken"} {...others} />);
}

export default Component;
