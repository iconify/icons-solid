import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/hur8_efnx.css';
import '../../css/x/x47r8kbfh.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/q/q0j3ufyus.css';
import '../../css/j/jyackt3ej.css';
import '../../css/y/yt894pbmg.css';
import '../../css/h/hzd6dt2yz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="hur8_efnx wm-deco"/><path class="wm-deco x47r8kbfh"/><path class="o7-ag87sb wm-deco"/><path class="q0j3ufyus wm-k"/><path class="jyackt3ej wm-a"/><path class="wm-k yt894pbmg"/><path class="hzd6dt2yz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:file-output-blueprint"} {...others} />);
}

export default Component;
