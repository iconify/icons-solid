import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jq1jgxb2q.css';
import '../../css/d/dr1n896-j.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="jq1jgxb2q"/><path class="dr1n896-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:chat-bubble-left-right-20-solid"} {...others} />);
}

export default Component;
