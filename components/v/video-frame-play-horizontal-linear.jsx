import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/utymdgx_e.css';
import '../../css/v/vncs1mbed.css';
import '../../css/d/d5oleed0c.css';
import '../../css/s/s5nsjsdgp.css';
import '../../css/p/pk133wbwu.css';
import '../../css/d/d85wtyayf.css';
import '../../css/c/cfl3_9b4r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="utymdgx_e"/><path class="vncs1mbed"/><path class="d5oleed0c"/><path class="s5nsjsdgp"/><path class="pk133wbwu"/><path class="d85wtyayf"/><path class="cfl3_9b4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:video-frame-play-horizontal-linear"} {...others} />);
}

export default Component;
