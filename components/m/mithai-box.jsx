import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/t/t6xggfhfy.css';
import '../../css/z/zf4p1410q.css';
import '../../css/h/hpr6zbbvy.css';
import '../../css/n/nht9sdbdo.css';
import '../../css/z/zqwa0hb4y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGAgXBdeVL" x1="9" x2="15" y1="3.51" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGAgXBdeVL)" class="t6xggfhfy"/><path class="wm-a zf4p1410q"/><path class="hpr6zbbvy wm-shine"/><path class="nht9sdbdo wm-deco"/><path class="wm-deco zqwa0hb4y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:mithai-box"} {...others} />);
}

export default Component;
