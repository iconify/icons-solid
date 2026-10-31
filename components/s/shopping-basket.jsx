import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/f/f_ycx-vbx.css';
import '../../css/a/ap-gj3b7f.css';
import '../../css/w/w1uibk7uq.css';
import '../../css/j/jyhuisb-t.css';
import '../../css/o/ongoxg94n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGBaKiIdCm" x1="8.99" x2="14.99" y1="2.5" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGBaKiIdCm)" class="f_ycx-vbx"/><path class="ap-gj3b7f wm-a"/><path class="w1uibk7uq wm-shine"/><path class="jyhuisb-t wm-shine"/><path class="ongoxg94n wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:shopping-basket"} {...others} />);
}

export default Component;
