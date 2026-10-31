import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/q/qr1kgebhh.css';
import '../../css/m/m1vrzkzjy.css';
import '../../css/z/z8_rb2btv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGUz1pEfkK" x1="9" x2="15" y1="3.02" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGUz1pEfkK)" class="qr1kgebhh"/><path class="m1vrzkzjy wm-s"/><path class="wm-shine z8_rb2btv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:heading-2"} {...others} />);
}

export default Component;
