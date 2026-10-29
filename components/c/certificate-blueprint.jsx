import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/y-_tb4_6e.css';
import '../../css/s/sxkh94-hc.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/r/rceqk1bum.css';
import '../../css/d/ds9ofjbgb.css';
import '../../css/u/uolx8dbdk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco y-_tb4_6e"/><path class="sxkh94-hc wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="rceqk1bum wm-k"/><path class="ds9ofjbgb wm-a"/><path class="uolx8dbdk wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:certificate-blueprint"} {...others} />);
}

export default Component;
