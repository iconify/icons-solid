import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mksjtpbtr.css';
import '../../css/y/yv_l9cb1h.css';
import '../../css/e/e_l-ej8iy.css';
import '../../css/n/n1871xgqc.css';
import '../../css/d/dk16v8bmc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mksjtpbtr"/><path class="yv_l9cb1h"/><path class="e_l-ej8iy"/><path class="n1871xgqc"/><path class="dk16v8bmc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:global-bold"} {...others} />);
}

export default Component;
