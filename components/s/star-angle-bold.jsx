import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vg0klab_s.css';
import '../../css/g/gly1y5baa.css';
import '../../css/c/cbyb2op2u.css';
import '../../css/m/mrj28bcsc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="vg0klab_s"/><path class="gly1y5baa"/><path class="cbyb2op2u"/><path class="mrj28bcsc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-angle-bold"} {...others} />);
}

export default Component;
