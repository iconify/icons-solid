import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l_l9j54wb.css';
import '../../css/i/ibs3oxbpk.css';
import '../../css/e/ew9z_ybft.css';
import '../../css/m/m2ebxhp-u.css';
import '../../css/l/lqo0vdbtn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="l_l9j54wb wm-k"/><path class="ibs3oxbpk wm-s"/><path class="ew9z_ybft wm-shadow"/><path class="m2ebxhp-u wm-k"/><path class="lqo0vdbtn wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-download-engrave"} {...others} />);
}

export default Component;
