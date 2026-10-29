import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wvzawccnr.css';
import '../../css/m/me0yibbdg.css';
import '../../css/t/t_h8wxb8n.css';
import '../../css/f/fjz3rbcpw.css';
import '../../css/d/drcrs7bkr.css';
import '../../css/t/t3uc5ycdd.css';
import '../../css/l/llkgw57wl.css';
import '../../css/y/yxe-72luz.css';
import '../../css/z/zfko-oqrn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow wvzawccnr"/><path class="me0yibbdg"/><path class="t_h8wxb8n"/><path class="fjz3rbcpw"/><path class="drcrs7bkr"/><path class="t3uc5ycdd"/><path class="llkgw57wl wm-shine"/><path class="wm-deco yxe-72luz"/><path class="wm-deco zfko-oqrn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:cash-register"} {...others} />);
}

export default Component;
