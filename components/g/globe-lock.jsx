import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/p/pueof-h4b.css';
import '../../css/h/hm8hn4b1g.css';
import '../../css/g/gd18a8utg.css';
import '../../css/i/ih0g91rfv.css';
import '../../css/z/zmu5jvb-s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGjkf7gcnT" x1="8.53" x2="14.53" y1="1.13" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path class="pueof-h4b wm-s"/><path fill="url(#SVGjkf7gcnT)" class="hm8hn4b1g"/><path class="gd18a8utg wm-a"/><path class="ih0g91rfv wm-s"/><path class="wm-shine zmu5jvb-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:globe-lock"} {...others} />);
}

export default Component;
