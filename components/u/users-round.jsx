import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/j/j-esawban.css';
import '../../css/f/f2bhn_5mw.css';
import '../../css/b/b7whx64cm.css';
import '../../css/j/jpy4cpbeb.css';
import '../../css/b/bruynltyt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGiNYZhdcu" x1="8.74" x2="14.74" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGiNYZhdcu)" class="j-esawban"/><path class="f2bhn_5mw wm-a"/><path class="b7whx64cm wm-shine"/><path class="jpy4cpbeb wm-shine"/><path class="bruynltyt wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:users-round"} {...others} />);
}

export default Component;
