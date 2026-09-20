import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pqe01s-uy.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/l/l8s031fwy.css';
import '../../css/s/sgu_fyztv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="pqe01s-uy"/><g class="mc2zb0bvp"><path class="l8s031fwy"/><path class="sgu_fyztv"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bluetooth-wave-bold-duotone"} {...others} />);
}

export default Component;
