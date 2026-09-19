import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yo9o33k3p.css';
import '../../css/q/qq3ivih_x.css';
import '../../css/u/usppm9ouw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="yo9o33k3p"/><path clip-rule="evenodd" class="qq3ivih_x"/><path class="usppm9ouw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:spreadsheets"} {...others} />);
}

export default Component;
