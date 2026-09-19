import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ergafni5q.css';
import '../../css/x/xf3313bml.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="ergafni5q"/><path class="xf3313bml"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:bison"} {...others} />);
}

export default Component;
