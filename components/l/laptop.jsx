import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/x/x7acc-bel.css';
import '../../css/y/yl8bsp4yo.css';
import '../../css/z/zusy1vfhr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGVn3OGdrg" x1="9" x2="15" y1="3" y2="20.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGVn3OGdrg)" class="x7acc-bel"/><path class="wm-a yl8bsp4yo"/><path class="wm-shine zusy1vfhr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:laptop"} {...others} />);
}

export default Component;
