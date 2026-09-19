import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c6acczb2b.css';
import '../../css/y/ylngnkt0m.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="c6acczb2b"/><path class="ylngnkt0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:microphone"} {...others} />);
}

export default Component;
