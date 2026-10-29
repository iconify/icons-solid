import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pzr-a8bhn.css';
import '../../css/m/m_xjbnu8u.css';
import '../../css/r/ru29o1bxp.css';
import '../../css/u/u9phz7buu.css';
import '../../css/h/hypn4bcaz.css';
import '../../css/x/xsr7llb6v.css';
import '../../css/u/u_j5_yo4o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="pzr-a8bhn"/><path class="m_xjbnu8u wm-k"/><path class="ru29o1bxp wm-a"/><path class="u9phz7buu wm-s"/><path class="hypn4bcaz wm-k"/><path class="wm-a xsr7llb6v"/><path class="u_j5_yo4o wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:calendar-off-sketch"} {...others} />);
}

export default Component;
