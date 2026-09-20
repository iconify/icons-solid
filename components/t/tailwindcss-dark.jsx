import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/p/p5pm383he.css';
import '../../css/r/rbd44pbxc.css';
import '../../css/l/la6_wwaeu.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path fill="url(#SVGdgekOdZf)" clip-rule="evenodd" class="p5pm383he"/><defs><linearGradient id="SVGdgekOdZf" x1="86.5" x2="163.5" y1="74" y2="185.5" gradientUnits="userSpaceOnUse"><stop class="rbd44pbxc"/><stop offset="1" class="la6_wwaeu"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:tailwindcss-dark"} {...others} />);
}

export default Component;
