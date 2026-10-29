import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qtx645bzo.css';
import '../../css/s/smpvc-b_b.css';
import '../../css/u/uo2sq_blb.css';
import '../../css/f/f_o9585tx.css';
import '../../css/d/d86tz-2ji.css';
import '../../css/j/j7ffi82vm.css';
import '../../css/g/guyzwybqo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qtx645bzo wm-k"/><path class="smpvc-b_b wm-a"/><path class="uo2sq_blb wm-shadow"/><path class="f_o9585tx wm-k"/><path class="d86tz-2ji wm-a"/><path class="j7ffi82vm wm-k"/><path class="guyzwybqo wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:maximize-2-engrave"} {...others} />);
}

export default Component;
