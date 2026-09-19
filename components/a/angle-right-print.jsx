import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jb6igl04p.css';
import '../../css/n/ne31xvb6c.css';
import '../../css/y/y2817u_1x.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="jb6igl04p"/><path class="ne31xvb6c"/><path class="y2817u_1x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:angle-right-print"} {...others} />);
}

export default Component;
