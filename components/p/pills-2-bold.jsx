import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pxzk20b5v.css';
import '../../css/q/qo6_w36xr.css';
import '../../css/s/sny6ugutg.css';
import '../../css/v/vf2x5z-cn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="pxzk20b5v"/><path class="qo6_w36xr"/><path class="sny6ugutg"/><path class="vf2x5z-cn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pills-2-bold"} {...others} />);
}

export default Component;
