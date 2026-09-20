import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p-o_ejbbk.css';
import '../../css/r/rarj2sb2r.css';
import '../../css/c/cjllxacvt.css';
import '../../css/s/shp6vzbvq.css';
import '../../css/s/sj81azm9k.css';
import '../../css/z/z00obrbuj.css';
import '../../css/w/wfayzv_el.css';
import '../../css/z/z4ob_faka.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p-o_ejbbk"/><path class="rarj2sb2r"/><path class="cjllxacvt"/><path class="shp6vzbvq"/><path class="sj81azm9k"/><path class="z00obrbuj"/><path class="wfayzv_el"/><path class="z4ob_faka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:video-file-star"} {...others} />);
}

export default Component;
