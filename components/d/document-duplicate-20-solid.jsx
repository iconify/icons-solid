import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k6q7iw6vx.css';
import '../../css/u/u95pdxf6v.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="k6q7iw6vx"/><path class="u95pdxf6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:document-duplicate-20-solid"} {...others} />);
}

export default Component;
