import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/r-v2lbc1g.css';
import '../../css/o/olywqo88d.css';
import '../../css/s/stui2mbih.css';
import '../../css/j/jttloou7d.css';
import '../../css/h/h4g6spbhi.css';
import '../../css/k/k0kvkqcen.css';
import '../../css/s/ss_52wb8n.css';
import '../../css/d/d051ysbak.css';
import '../../css/n/nqgz9dvfc.css';
import '../../css/k/kojqb0bms.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><defs><linearGradient id="SVGFWWBVdRg" x1="0" x2="0" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="r-v2lbc1g"/><stop offset="1" class="olywqo88d"/></linearGradient><linearGradient id="SVG9nqHQcQr" x1="2" x2="22" y1="0" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" class="stui2mbih"/><stop offset=".3" class="jttloou7d"/><stop offset=".7" class="jttloou7d"/><stop offset="1" class="stui2mbih"/></linearGradient></defs><path class="h4g6spbhi wm-deco"/><path fill="url(#SVGFWWBVdRg)" class="k0kvkqcen wm-deco"/><path stroke="url(#SVG9nqHQcQr)" class="ss_52wb8n wm-deco"/><path class="d051ysbak wm-shadow"/><path class="nqgz9dvfc wm-shadow"/><path class="kojqb0bms"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bento:sigma"} {...others} />);
}

export default Component;
