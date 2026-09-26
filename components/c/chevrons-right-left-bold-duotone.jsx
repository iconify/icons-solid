import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/j/jv2sm3bdr.css';
import '../../css/c/c-2sdjbgw.css';
import '../../css/l/lddbdac-q.css';
import '../../css/c/ceqa4_bdq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="jv2sm3bdr"/><path class="c-2sdjbgw"/></g><path class="lddbdac-q"/><path class="ceqa4_bdq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevrons-right-left-bold-duotone"} {...others} />);
}

export default Component;
