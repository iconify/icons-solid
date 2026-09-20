import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wethgabtb.css';
import '../../css/r/rpehk_grd.css';
import '../../css/q/qlhp-t4sb.css';
import '../../css/r/rmon3qypk.css';
import '../../css/o/ouws2u0qm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wethgabtb"/><path class="rpehk_grd"/><path clip-rule="evenodd" class="qlhp-t4sb"/><path class="rmon3qypk"/><path class="ouws2u0qm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:siren-outline"} {...others} />);
}

export default Component;
