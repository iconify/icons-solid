import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/r/rq2_obczd.css';
import '../../css/h/hqb3bhbzr.css';
import '../../css/p/p8_c5kbnt.css';
import '../../css/b/b2k__8e2m.css';
import '../../css/w/w06kujbyg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGIg4J7dVX" x1="8.87" x2="14.87" y1="1.51" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGIg4J7dVX)" class="rq2_obczd"/><path class="hqb3bhbzr wm-a"/><path class="p8_c5kbnt wm-shine"/><path class="b2k__8e2m wm-shine"/><path class="w06kujbyg wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:dental-chair"} {...others} />);
}

export default Component;
