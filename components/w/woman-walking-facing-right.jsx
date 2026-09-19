import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/szl0qtocz.css';
import '../../css/a/a3u6kcbko.css';
import '../../css/a/adz1-bszm.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="szl0qtocz"/><path class="a3u6kcbko"/><path class="adz1-bszm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-walking-facing-right"} {...others} />);
}

export default Component;
