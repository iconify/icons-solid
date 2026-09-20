import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tgm8h5y-t.css';
import '../../css/c/c5xz3nb4n.css';
import '../../css/y/y5fb0lpcu.css';
import '../../css/o/ojj18acah.css';

const viewBox = {"width":100,"height":100};
const content = `<g class="ft5dv1b6b"><path class="tgm8h5y-t"/><path fill="url(#SVGuCSTJr9j)" clip-rule="evenodd" class="c5xz3nb4n"/><defs><linearGradient id="SVGuCSTJr9j" x1="54.644" x2="5.425" y1="7.031" y2="56.211" gradientUnits="userSpaceOnUse"><stop class="y5fb0lpcu"/><stop offset="1" class="ojj18acah"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:turborepo-light"} {...others} />);
}

export default Component;
