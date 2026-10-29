import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hpu2ghv2w.css';
import '../../css/w/w1zs2bbif.css';
import '../../css/i/ic5g_yble.css';
import '../../css/s/smls78shz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="hpu2ghv2w wm-k"/><path class="w1zs2bbif wm-shadow"/><path class="ic5g_yble wm-k"/><path class="smls78shz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:door-closed-engrave"} {...others} />);
}

export default Component;
