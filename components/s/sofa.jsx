import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/d/dz2v1wbzc.css';
import '../../css/x/xgvh9rbai.css';
import '../../css/y/yk-bbf3fr.css';
import '../../css/v/vevwzcb4d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGHkIuBeNS" x1="9" x2="15" y1="5" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGHkIuBeNS)" class="dz2v1wbzc"/><path class="wm-shine xgvh9rbai"/><path class="wm-shine yk-bbf3fr"/><path class="vevwzcb4d wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:sofa"} {...others} />);
}

export default Component;
