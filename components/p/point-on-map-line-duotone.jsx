import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r_kmw_yut.css';
import '../../css/z/zv97pxbdl.css';
import '../../css/p/ptvu1u_4n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="r_kmw_yut"/><path class="zv97pxbdl"/><circle class="ptvu1u_4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:point-on-map-line-duotone"} {...others} />);
}

export default Component;
