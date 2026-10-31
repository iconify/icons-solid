import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/a/agb7tok0v.css';
import '../../css/e/ee5564bic.css';
import '../../css/d/dr0whj7zl.css';
import '../../css/i/ibfubdc7t.css';
import '../../css/n/n27vvfgft.css';
import '../../css/r/rmtl3eb6o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGdSVONocx" x1="9" x2="15" y1="1.51" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGdSVONocx)" class="agb7tok0v"/><path class="ee5564bic wm-shine"/><path class="dr0whj7zl wm-shine"/><path class="ibfubdc7t wm-shine"/><path class="n27vvfgft wm-shine"/><path class="rmtl3eb6o wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:map-pin-check"} {...others} />);
}

export default Component;
