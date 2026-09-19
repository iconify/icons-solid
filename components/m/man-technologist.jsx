import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xfcu0acug.css';
import '../../css/j/jhv688btw.css';
import '../../css/t/t1om97gpo.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="xfcu0acug"/><path class="jhv688btw"/><path class="t1om97gpo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-technologist"} {...others} />);
}

export default Component;
