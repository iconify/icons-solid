import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b_x4_eukp.css';
import '../../css/n/ng8pc3bug.css';
import '../../css/n/nj91p_bpn.css';
import '../../css/n/no2ur_lbr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="b_x4_eukp wm-shadow"/><path class="ng8pc3bug"/><path class="nj91p_bpn"/><path class="no2ur_lbr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:rewind"} {...others} />);
}

export default Component;
