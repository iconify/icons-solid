import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/c/cifk5bbzh.css';
import '../../css/u/ulgq5qb4j.css';
import '../../css/t/ttzdo5brq.css';
import '../../css/v/vjm3rqnoc.css';
import '../../css/d/domz0bcmh.css';
import '../../css/v/vt2x_hp_b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVG7oIkc70U" x1="9" x2="15" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG7oIkc70U)" class="cifk5bbzh"/><path class="ulgq5qb4j wm-shine"/><path class="ttzdo5brq wm-shine"/><path class="vjm3rqnoc wm-shine"/><path class="domz0bcmh wm-shine"/><path class="vt2x_hp_b wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:square-function"} {...others} />);
}

export default Component;
