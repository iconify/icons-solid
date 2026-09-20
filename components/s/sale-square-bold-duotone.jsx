import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y6-b8lbmz.css';
import '../../css/g/gw3k3_70f.css';
import '../../css/c/c8u9_eljn.css';
import '../../css/p/p2_bw9bde.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="y6-b8lbmz"/><path class="gw3k3_70f"/><path class="c8u9_eljn"/><path class="p2_bw9bde"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sale-square-bold-duotone"} {...others} />);
}

export default Component;
