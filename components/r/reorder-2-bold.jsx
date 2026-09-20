import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/swmj859dg.css';
import '../../css/c/cmyxzeb6m.css';
import '../../css/f/fgizidusj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="swmj859dg"/><path class="cmyxzeb6m"/><path class="fgizidusj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:reorder-2-bold"} {...others} />);
}

export default Component;
