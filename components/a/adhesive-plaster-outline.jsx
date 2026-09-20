import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xgvmc9b2p.css';
import '../../css/g/gl1vkm9xn.css';
import '../../css/t/t7dq8qe8u.css';
import '../../css/h/hx39m_y0n.css';
import '../../css/d/ds_n7vo5u.css';
import '../../css/s/svsd1w-il.css';
import '../../css/p/pqr_ddb0p.css';
import '../../css/p/p6bnc_3nl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="xgvmc9b2p"/><path class="gl1vkm9xn"/><path class="t7dq8qe8u"/><path class="hx39m_y0n"/><path class="ds_n7vo5u"/><path class="svsd1w-il"/><path class="pqr_ddb0p"/><path clip-rule="evenodd" class="p6bnc_3nl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:adhesive-plaster-outline"} {...others} />);
}

export default Component;
