import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/l/lxt23mbil.css';
import '../../css/i/ivwewccoi.css';
import '../../css/d/d98wb_bsv.css';
import '../../css/b/b5i545b3c.css';
import '../../css/n/nfpmyinnp.css';
import '../../css/w/w2aa2etev.css';
import '../../css/l/l7r_smbse.css';
import '../../css/y/yzov2sjfw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGstTSuIZQ" x1="10.25" x2="14.25" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="lxt23mbil wm-k"/><path class="ivwewccoi wm-s"/><path class="d98wb_bsv wm-deco"/><path fill="url(#SVGstTSuIZQ)" class="b5i545b3c wm-k"/><path class="nfpmyinnp wm-s"/><path class="w2aa2etev wm-shadow"/><path class="l7r_smbse wm-shine"/><path class="wm-shine yzov2sjfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:phone-missed"} {...others} />);
}

export default Component;
