import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yrto-kb8j.css';
import '../../css/y/yqjeyqbus.css';
import '../../css/g/gk8gx7whk.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGWrFr8bYr)" class="yrto-kb8j"/><defs><linearGradient id="SVGWrFr8bYr" x1="18" x2="1.55" y1="18" y2="2.477" gradientUnits="userSpaceOnUse"><stop class="yqjeyqbus"/><stop offset="1" class="gk8gx7whk"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:star-20"} {...others} />);
}

export default Component;
