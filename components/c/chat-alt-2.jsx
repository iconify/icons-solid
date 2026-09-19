import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rv51y6bhv.css';
import '../../css/y/y1ps0521i.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="rv51y6bhv"/><path class="y1ps0521i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:chat-alt-2"} {...others} />);
}

export default Component;
