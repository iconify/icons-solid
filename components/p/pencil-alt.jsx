import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q7qq26j7t.css';
import '../../css/v/vs22qfbhf.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="q7qq26j7t"/><path clip-rule="evenodd" class="vs22qfbhf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:pencil-alt"} {...others} />);
}

export default Component;
