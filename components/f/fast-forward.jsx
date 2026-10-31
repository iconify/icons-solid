import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/y/ykyfenbrq.css';
import '../../css/k/klmz48b6j.css';
import '../../css/o/o9wp_abkv.css';
import '../../css/t/tc0j93bhj.css';
import '../../css/m/mzg3ysbmx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGaALuxeAJ" x1="9" x2="15" y1="4.5" y2="19.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGaALuxeAJ)" class="ykyfenbrq"/><path class="klmz48b6j wm-a"/><path class="o9wp_abkv wm-shine"/><path class="tc0j93bhj wm-shine"/><path class="mzg3ysbmx wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:fast-forward"} {...others} />);
}

export default Component;
