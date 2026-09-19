import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k--s4ibsz.css';
import '../../css/y/yqjeyqbus.css';
import '../../css/g/gk8gx7whk.css';

const viewBox = {"width":28,"height":28};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGDylKYcOo)" class="k--s4ibsz"/><defs><linearGradient id="SVGDylKYcOo" x1="25.25" x2="2.112" y1="25.124" y2="3.296" gradientUnits="userSpaceOnUse"><stop class="yqjeyqbus"/><stop offset="1" class="gk8gx7whk"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:star-28"} {...others} />);
}

export default Component;
