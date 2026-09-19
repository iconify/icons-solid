import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/drtadmc6e.css';
import '../../css/r/rcf3yquid.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="drtadmc6e"/><path class="rcf3yquid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:cricket"} {...others} />);
}

export default Component;
