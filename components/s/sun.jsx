import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/t/tody9wbxb.css';
import '../../css/p/pgybl0-sx.css';
import '../../css/l/ldqv-8g_y.css';
import '../../css/w/wvmct_bhn.css';
import '../../css/f/fa_vh4bdn.css';
import '../../css/u/uodmqpbhw.css';
import '../../css/e/ekki02gme.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGyS53PGOI" x1="9" x2="15" y1="1.01" y2="23" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGyS53PGOI)" class="tody9wbxb"/><path class="pgybl0-sx wm-a"/><path class="ldqv-8g_y wm-shine"/><path class="wm-shine wvmct_bhn"/><path class="fa_vh4bdn wm-shine"/><path class="uodmqpbhw wm-deco"/><path class="ekki02gme wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:sun"} {...others} />);
}

export default Component;
