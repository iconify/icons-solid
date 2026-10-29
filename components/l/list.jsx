import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vweo22o1j.css';
import '../../css/k/kip_9qz7y.css';
import '../../css/x/xx7vx_ljs.css';
import '../../css/h/hrk0h_bpr.css';
import '../../css/v/vhv9gtblg.css';
import '../../css/r/r8u7uvbvi.css';
import '../../css/c/cbv78cobs.css';
import '../../css/d/dfpz25_9y.css';
import '../../css/t/tq7s2gkku.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vweo22o1j wm-shadow"/><path class="kip_9qz7y wm-shadow"/><path class="xx7vx_ljs"/><path class="hrk0h_bpr"/><path class="vhv9gtblg"/><path class="r8u7uvbvi"/><path class="cbv78cobs wm-shine"/><path class="dfpz25_9y wm-shine"/><path class="tq7s2gkku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:list"} {...others} />);
}

export default Component;
