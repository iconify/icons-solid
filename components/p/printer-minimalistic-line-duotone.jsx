import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/culec24yp.css';
import '../../css/l/l-sg7_bax.css';
import '../../css/d/dcs8ey39w.css';
import '../../css/h/hx-wuc0xm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="culec24yp"/><path class="l-sg7_bax"/><path class="dcs8ey39w"/><path class="hx-wuc0xm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:printer-minimalistic-line-duotone"} {...others} />);
}

export default Component;
