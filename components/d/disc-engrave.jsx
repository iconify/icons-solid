import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rviqavk6k.css';
import '../../css/q/qa8yllnsv.css';
import '../../css/l/lr-rh0b9q.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/f/fjmcwu-8t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="rviqavk6k wm-k"/><path class="qa8yllnsv wm-a"/><path class="lr-rh0b9q wm-shadow"/><path class="wm-k yw4fz_b6b"/><path class="fjmcwu-8t wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:disc-engrave"} {...others} />);
}

export default Component;
