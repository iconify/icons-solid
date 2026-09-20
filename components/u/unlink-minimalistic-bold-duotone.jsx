import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/o/oq9c_3bzv.css';
import '../../css/t/t_ro0pywx.css';
import '../../css/y/y2t0nnbtb.css';
import '../../css/l/lm3wquboo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="oq9c_3bzv"/><path class="t_ro0pywx"/></g><path class="y2t0nnbtb"/><path class="lm3wquboo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:unlink-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
