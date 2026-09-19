import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rfngnx80n.css';
import '../../css/e/e23h7qqhm.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="rfngnx80n"/><path class="e23h7qqhm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:videocassette"} {...others} />);
}

export default Component;
