import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/h/hopurmb_u.css';
import '../../css/b/b750tjb7v.css';
import '../../css/l/ljpaalbpn.css';
import '../../css/f/fwvy0ebow.css';
import '../../css/k/k012-s1rl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGVn3OGdrg" x1="9" x2="15" y1="3" y2="20.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGVn3OGdrg)" class="hopurmb_u"/><path class="b750tjb7v wm-a"/><path class="ljpaalbpn wm-shine"/><path class="fwvy0ebow wm-deco"/><path class="k012-s1rl wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:toran"} {...others} />);
}

export default Component;
