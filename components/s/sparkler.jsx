import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/scrufj9qh.css';
import '../../css/v/vhffc8b8q.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="scrufj9qh"/><path class="vhffc8b8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:sparkler"} {...others} />);
}

export default Component;
