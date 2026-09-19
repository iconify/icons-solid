import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qlu_-xbel.css';
import '../../css/n/n_41g1asg.css';
import '../../css/h/hq3yghbwf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="qlu_-xbel"/><path class="n_41g1asg"/><path class="hq3yghbwf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-walking-facing-right"} {...others} />);
}

export default Component;
