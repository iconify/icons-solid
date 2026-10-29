import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/b8binbbdb.css';
import '../../css/p/pqr5dtuud.css';
import '../../css/u/ul19i67dq.css';
import '../../css/s/sx059e3kk.css';
import '../../css/x/xn33u4brk.css';
import '../../css/w/wp83hc_bc.css';
import '../../css/p/p7p07ac_d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="b8binbbdb wm-deco"/><path class="pqr5dtuud wm-deco"/><path class="ul19i67dq wm-deco"/><path class="sx059e3kk wm-k"/><path class="wm-a xn33u4brk"/><path class="wm-k wp83hc_bc"/><path class="p7p07ac_d wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-sun-blueprint"} {...others} />);
}

export default Component;
