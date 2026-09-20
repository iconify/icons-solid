import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z3bsbmb9h.css';
import '../../css/j/jy0j_j05g.css';
import '../../css/c/cwioucchd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="z3bsbmb9h"/><path class="jy0j_j05g"/><path class="cwioucchd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-off-line-duotone"} {...others} />);
}

export default Component;
