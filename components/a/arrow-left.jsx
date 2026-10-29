import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/vmxv0gbzs.css';
import '../../css/q/qu0_imbfd.css';
import '../../css/d/d_4bofohi.css';
import '../../css/y/ylmujju3z.css';
import '../../css/p/pf2ux0-qe.css';
import '../../css/r/ry52agbal.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="vmxv0gbzs wm-shadow"/><path class="qu0_imbfd"/><path class="d_4bofohi"/><path class="ylmujju3z"/><path class="pf2ux0-qe wm-shine"/><path class="ry52agbal wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:arrow-left"} {...others} />);
}

export default Component;
