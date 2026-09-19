import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/loese4_av.css';
import '../../css/x/xfhs5_bps.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="loese4_av"/><path class="xfhs5_bps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:motorway"} {...others} />);
}

export default Component;
