import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/d/dcgw77bis.css';
import '../../css/y/y4si8vbaw.css';
import '../../css/p/pusscp3cq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><circle class="dcgw77bis"/><path class="y4si8vbaw"/><path class="pusscp3cq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:atom-alt-light"} {...others} />);
}

export default Component;
