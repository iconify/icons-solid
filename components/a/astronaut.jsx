import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e_0-8sb7n.css';
import '../../css/l/lqbdq70dr.css';
import '../../css/s/sorxzqbxa.css';
import '../../css/p/pkcbadncp.css';
import '../../css/y/ylzw76k-v.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="e_0-8sb7n"/><path class="lqbdq70dr"/><path class="sorxzqbxa"/><path class="pkcbadncp"/><path class="ylzw76k-v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:astronaut"} {...others} />);
}

export default Component;
