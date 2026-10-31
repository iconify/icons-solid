import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/g/g4rbpccrn.css';
import '../../css/i/ilrh19bht.css';
import '../../css/y/y5bjzibsy.css';
import '../../css/f/f5tng0ycg.css';
import '../../css/p/pdv90eb5c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGQOeWMd3q" x1="9.12" x2="15.12" y1="2.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGQOeWMd3q)" class="g4rbpccrn"/><path class="ilrh19bht wm-a"/><path class="wm-shine y5bjzibsy"/><path class="f5tng0ycg wm-shine"/><path class="pdv90eb5c wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:pilcrow"} {...others} />);
}

export default Component;
