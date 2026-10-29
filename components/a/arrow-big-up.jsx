import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vts8luguz.css';
import '../../css/b/bdh_yppki.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/a/ackqa5buo.css';
import '../../css/i/it7msob6f.css';
import '../../css/s/skznqacfi.css';
import '../../css/z/zrbh0ub1e.css';
import '../../css/b/b-c_10y6f.css';
import '../../css/m/mp3vtlqfi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGkiNXbdfQ" x1="2.01" x2="13" y1="1.51" y2="21.98" gradientUnits="userSpaceOnUse"><stop offset=".3" class="vts8luguz"/><stop offset="1" class="bdh_yppki"/></linearGradient><linearGradient id="SVGs2cnnctb" x1="0" x2="0" y1=".45" y2="10.68" gradientUnits="userSpaceOnUse"><stop offset=".25" class="vc--wpv5i"/><stop offset="1" class="ackqa5buo"/></linearGradient></defs><path class="it7msob6f"/><path fill="url(#SVGkiNXbdfQ)" class="skznqacfi wm-shine"/><path class="wm-deco zrbh0ub1e"/><path fill="url(#SVGs2cnnctb)" class="b-c_10y6f wm-deco"/><path class="mp3vtlqfi wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-christmas:arrow-big-up"} {...others} />);
}

export default Component;
