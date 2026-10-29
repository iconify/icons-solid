import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sxie_rsic.css';
import '../../css/w/wm_kbibqc.css';
import '../../css/y/y7q976lkn.css';
import '../../css/m/m2ebxhp-u.css';
import '../../css/g/gpzldrb9z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="sxie_rsic wm-k"/><path class="wm-s wm_kbibqc"/><path class="wm-shadow y7q976lkn"/><path class="m2ebxhp-u wm-k"/><path class="gpzldrb9z wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-upload-engrave"} {...others} />);
}

export default Component;
