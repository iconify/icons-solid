import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/e/e8iu4mbyk.css';
import '../../css/x/xnoq0iq9a.css';
import '../../css/v/vrrheh1xg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGZWCObe9s" x1="9.24" x2="15.24" y1="3.02" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGZWCObe9s)" class="e8iu4mbyk"/><path class="wm-a xnoq0iq9a"/><path class="vrrheh1xg wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:list-music"} {...others} />);
}

export default Component;
