import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oye_q3fhr.css';
import '../../css/v/vq_y3vp5k.css';
import '../../css/v/vj77h6eyt.css';
import '../../css/a/a__wkxbie.css';
import '../../css/u/ucrkt6wtb.css';
import '../../css/m/mklht3adb.css';
import '../../css/u/ut52g0oxi.css';
import '../../css/k/khk7-mq5t.css';
import '../../css/s/sx0jm81or.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oye_q3fhr wm-k"/><path class="vq_y3vp5k wm-k"/><path class="vj77h6eyt wm-k"/><path class="a__wkxbie wm-k"/><path class="ucrkt6wtb wm-k"/><path class="mklht3adb wm-k"/><path class="ut52g0oxi wm-k"/><path class="khk7-mq5t wm-shine"/><path class="sx0jm81or wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:scan-text"} {...others} />);
}

export default Component;
