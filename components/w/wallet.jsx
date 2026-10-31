import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/s/sm0dvtb7g.css';
import '../../css/n/ngys1r5rh.css';
import '../../css/u/uclqxjbax.css';
import '../../css/p/pcstktqit.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGMEqEgdLs" x1="9" x2="15" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGMEqEgdLs)" class="sm0dvtb7g"/><path class="ngys1r5rh wm-shine"/><path class="uclqxjbax wm-shine"/><path class="pcstktqit wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:wallet"} {...others} />);
}

export default Component;
