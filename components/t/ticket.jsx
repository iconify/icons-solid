import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iu5t1hi9x.css';
import '../../css/x/xx33i3ihv.css';
import '../../css/w/wq4w-tbtk.css';
import '../../css/o/o3usiu03n.css';
import '../../css/j/j23r3t8rk.css';
import '../../css/g/gvmkj3rjb.css';
import '../../css/c/ck3y3dtfx.css';
import '../../css/n/n7bqhwb5e.css';
import '../../css/c/c-rvitb0r.css';
import '../../css/s/sd9vn-b8k.css';
import '../../css/w/wm62ov9dy.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><radialGradient id="SVGR19p4cDp" cx="67" cy="55.8" r="148.8" gradientUnits="userSpaceOnUse"><stop offset="0" class="iu5t1hi9x"/><stop offset=".85" class="xx33i3ihv"/><stop offset="1" class="xx33i3ihv"/></radialGradient><radialGradient id="SVGeZIeALFl" cx="159" cy="96.5" r="18.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="wq4w-tbtk"/><stop offset=".85" class="o3usiu03n"/><stop offset="1" class="o3usiu03n"/></radialGradient></defs><path class="j23r3t8rk"/><path fill="url(#SVGR19p4cDp)" transform="rotate(-20 288.314 204.181)scale(2.4)" class="gvmkj3rjb"/><path class="ck3y3dtfx"/><path class="n7bqhwb5e"/><path class="c-rvitb0r"/><path class="sd9vn-b8k"/><path fill="url(#SVGeZIeALFl)" transform="rotate(-20 288.314 204.181)scale(2.4)" class="wm62ov9dy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:ticket"} {...others} />);
}

export default Component;
