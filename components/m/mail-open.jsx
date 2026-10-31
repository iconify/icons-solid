import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/e/eotlyptgl.css';
import '../../css/y/y2fk1bcnq.css';
import '../../css/v/va1wjubqm.css';
import '../../css/e/evx17tb_l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGNAtBfbbw" x1="9" x2="15" y1="2.5" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGNAtBfbbw)" class="eotlyptgl"/><path class="wm-shine y2fk1bcnq"/><path class="va1wjubqm wm-shine"/><path class="evx17tb_l wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:mail-open"} {...others} />);
}

export default Component;
