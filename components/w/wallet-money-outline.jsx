import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m7-l30b7r.css';
import '../../css/c/cw-q6sb0g.css';
import '../../css/v/vj884fv_j.css';
import '../../css/l/l_cnx558v.css';
import '../../css/r/rozuv8b4d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m7-l30b7r"/><path class="cw-q6sb0g"/><path clip-rule="evenodd" class="vj884fv_j"/><path class="l_cnx558v"/><path clip-rule="evenodd" class="rozuv8b4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wallet-money-outline"} {...others} />);
}

export default Component;
