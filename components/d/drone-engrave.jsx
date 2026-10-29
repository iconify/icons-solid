import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/slrgnkb1f.css';
import '../../css/v/vlx0_vblb.css';
import '../../css/n/npw91zb7m.css';
import '../../css/h/hr07nwq7t.css';
import '../../css/t/t96a34een.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="slrgnkb1f wm-k"/><path class="vlx0_vblb wm-a"/><path class="npw91zb7m wm-shadow"/><path class="hr07nwq7t wm-k"/><path class="t96a34een wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:drone-engrave"} {...others} />);
}

export default Component;
