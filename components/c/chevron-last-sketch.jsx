import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mi6_62o3d.css';
import '../../css/u/u_ak17bik.css';
import '../../css/v/vcd_rabzn.css';
import '../../css/f/f88le3b-k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mi6_62o3d wm-k"/><path class="u_ak17bik wm-k"/><path class="vcd_rabzn wm-a"/><path class="f88le3b-k wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chevron-last-sketch"} {...others} />);
}

export default Component;
