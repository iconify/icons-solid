import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/q/q90gee73j.css';
import '../../css/c/c5t6d-bay.css';
import '../../css/a/a2l2y5bfi.css';
import '../../css/p/po_0g2cqc.css';
import '../../css/z/z3vnpp7er.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGxZrC4caq" x1="8.74" x2="14.74" y1="1.78" y2="22.75" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGxZrC4caq)" class="q90gee73j"/><path class="c5t6d-bay wm-a"/><path class="a2l2y5bfi wm-shine"/><path class="po_0g2cqc wm-shine"/><path class="wm-shine z3vnpp7er"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:rocket"} {...others} />);
}

export default Component;
