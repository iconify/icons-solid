import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yrbcxwbtp.css';
import '../../css/x/xwzq0ibim.css';
import '../../css/a/aos1y_4zp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="yrbcxwbtp"/><path class="xwzq0ibim"/><path class="aos1y_4zp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-running"} {...others} />);
}

export default Component;
