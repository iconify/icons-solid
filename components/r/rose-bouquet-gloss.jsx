import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/frkxq78kw.css';
import '../../css/r/razmnrbbm.css';
import '../../css/d/d3vf8keel.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="frkxq78kw wm-deco"/><path class="razmnrbbm wm-k"/><path class="d3vf8keel wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rose-bouquet-gloss"} {...others} />);
}

export default Component;
