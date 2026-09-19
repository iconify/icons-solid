import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bw5fcqb1b.css';
import '../../css/p/pqfz5nzhw.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="bw5fcqb1b"/><path class="pqfz5nzhw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:square-2-stack"} {...others} />);
}

export default Component;
