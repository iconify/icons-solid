import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rwox7w1fm.css';
import '../../css/p/p6gvc2bts.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="rwox7w1fm"/><path class="p6gvc2bts"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:crying-cat"} {...others} />);
}

export default Component;
