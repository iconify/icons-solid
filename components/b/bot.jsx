import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/v/vizzszbdb.css';
import '../../css/y/yol57ccqt.css';
import '../../css/n/nqs4_ym9b.css';
import '../../css/u/ui6lm3dhe.css';
import '../../css/v/v4fgmok_x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGeZzUgegN" x1="9" x2="15" y1="1.25" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGeZzUgegN)" class="vizzszbdb"/><path class="wm-a yol57ccqt"/><path class="nqs4_ym9b wm-shine"/><path class="ui6lm3dhe wm-shine"/><path class="v4fgmok_x wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:bot"} {...others} />);
}

export default Component;
