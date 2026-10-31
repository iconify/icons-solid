import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/n/njrs9bcyi.css';
import '../../css/j/j7aucs4nb.css';
import '../../css/f/f73iycbmp.css';
import '../../css/i/ic5g_yble.css';
import '../../css/s/smls78shz.css';
import '../../css/s/s0lin7ebv.css';
import '../../css/h/hf5_do3mk.css';
import '../../css/e/ebpm9cbcw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="njrs9bcyi"/><path class="j7aucs4nb"/><path class="f73iycbmp wm-shine"/><path class="ic5g_yble wm-k"/><path class="smls78shz wm-a"/><path class="s0lin7ebv"/><path class="hf5_do3mk"/><path class="ebpm9cbcw wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:door-closed"} {...others} />);
}

export default Component;
