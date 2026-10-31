import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/o/orllsders.css';
import '../../css/t/tsj56cbrl.css';
import '../../css/u/ulrkoenwg.css';
import '../../css/e/ea9o391hf.css';
import '../../css/s/sh8uu1btw.css';
import '../../css/j/jn0wo86xi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGdSVONocx" x1="9" x2="15" y1="1.51" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGdSVONocx)" class="orllsders"/><path class="tsj56cbrl wm-shine"/><path class="ulrkoenwg wm-shine"/><path class="ea9o391hf wm-shine"/><path class="sh8uu1btw wm-shine"/><path class="jn0wo86xi wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:file-spreadsheet"} {...others} />);
}

export default Component;
