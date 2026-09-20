import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wethgabtb.css';
import '../../css/l/lrd97y3uh.css';
import '../../css/w/wxqfd6k_b.css';
import '../../css/t/to8rd8orv.css';
import '../../css/p/pbnpm7-9j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wethgabtb"/><path class="lrd97y3uh"/><path clip-rule="evenodd" class="wxqfd6k_b"/><path class="to8rd8orv"/><path class="pbnpm7-9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:siren-rounded-outline"} {...others} />);
}

export default Component;
