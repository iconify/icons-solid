import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/trbopwbeb.css';
import '../../css/m/mj45q_pwr.css';
import '../../css/m/m_glc7iuy.css';
import '../../css/n/nag107gnx.css';
import '../../css/n/nob2a0bbf.css';
import '../../css/z/zj_xi2bhv.css';
import '../../css/p/pzcpqfb7d.css';
import '../../css/g/gk6g-yhok.css';
import '../../css/s/shsojk4vy.css';
import '../../css/x/x214md_bs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="trbopwbeb"/><path class="mj45q_pwr wm-a"/><path class="m_glc7iuy"/><path class="nag107gnx wm-a"/><path class="nob2a0bbf"/><path class="wm-a zj_xi2bhv"/><path class="pzcpqfb7d"/><path class="gk6g-yhok wm-a"/><path class="shsojk4vy"/><path class="wm-a x214md_bs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-unicorn-duo"} {...others} />);
}

export default Component;
