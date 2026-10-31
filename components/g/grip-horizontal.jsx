import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/t/tu_89lllf.css';
import '../../css/s/s6_7fbe9u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVG82fJtWRS" x1="9.01" x2="15.01" y1="7.13" y2="16.87" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG82fJtWRS)" class="tu_89lllf"/><path class="s6_7fbe9u wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:grip-horizontal"} {...others} />);
}

export default Component;
