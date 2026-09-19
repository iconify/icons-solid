import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pvbe4jb6b.css';
import '../../css/k/k4yesgb8v.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="pvbe4jb6b"/><path class="k4yesgb8v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:inbox-arrow-down"} {...others} />);
}

export default Component;
