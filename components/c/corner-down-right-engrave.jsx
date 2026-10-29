import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/oxa8kyfga.css';
import '../../css/j/jvw0w5byh.css';
import '../../css/v/vghekgbcn.css';
import '../../css/i/izx2oobri.css';
import '../../css/u/u8_zcib_q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="oxa8kyfga wm-k"/><path class="jvw0w5byh wm-a"/><path class="vghekgbcn wm-shadow"/><path class="izx2oobri wm-k"/><path class="u8_zcib_q wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:corner-down-right-engrave"} {...others} />);
}

export default Component;
