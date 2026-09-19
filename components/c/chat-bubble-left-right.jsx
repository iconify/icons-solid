import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g55cccb1l.css';
import '../../css/r/rluz9rb9p.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="g55cccb1l"/><path class="rluz9rb9p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:chat-bubble-left-right"} {...others} />);
}

export default Component;
