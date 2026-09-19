import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d5kqnjb0b.css';
import '../../css/y/yga-tacwk.css';
import '../../css/e/e0j_m1_-l.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="d5kqnjb0b"/><path class="yga-tacwk"/><path class="e0j_m1_-l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:tear-off-calendar"} {...others} />);
}

export default Component;
