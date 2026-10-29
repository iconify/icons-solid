import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/r_ag4fbgb.css';
import '../../css/s/skyku6blw.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/l/l9lv5_bcf.css';
import '../../css/c/chdm4boxh.css';
import '../../css/y/yjrq28frk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="r_ag4fbgb wm-deco"/><path class="skyku6blw wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="l9lv5_bcf wm-k"/><path class="chdm4boxh wm-a"/><path class="wm-a yjrq28frk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:scan-eye-blueprint"} {...others} />);
}

export default Component;
