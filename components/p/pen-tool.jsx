import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/p/p8tnhqb9e.css';
import '../../css/r/rdmr1kiai.css';
import '../../css/m/mbvsmr5bi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGeiOedbeW" x1="9.02" x2="15.02" y1="2.52" y2="21.43" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGeiOedbeW)" class="p8tnhqb9e"/><path class="rdmr1kiai wm-a"/><path class="mbvsmr5bi wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:pen-tool"} {...others} />);
}

export default Component;
