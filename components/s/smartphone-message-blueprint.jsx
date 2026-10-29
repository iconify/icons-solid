import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/f60v5qb5x.css';
import '../../css/r/rmox5t-1p.css';
import '../../css/x/xupe0ib4r.css';
import '../../css/j/j4vloz-tr.css';
import '../../css/p/pm96j7xxh.css';
import '../../css/w/wiker-buu.css';
import '../../css/m/miuy3cssn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="f60v5qb5x wm-deco"/><path class="rmox5t-1p wm-deco"/><path class="wm-deco xupe0ib4r"/><path class="j4vloz-tr wm-k"/><path class="pm96j7xxh wm-a"/><path class="wiker-buu wm-s"/><path class="miuy3cssn wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:smartphone-message-blueprint"} {...others} />);
}

export default Component;
