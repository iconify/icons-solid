import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m-3my0bau.css';
import '../../css/k/kzugat13e.css';
import '../../css/i/ijvrv6b-m.css';
import '../../css/j/j15ty4b9p.css';
import '../../css/g/gvb26tbkk.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGv3WPqdcU)"><path class="m-3my0bau"/><g clip-path="url(#SVG5qy9KbCN)"><path class="kzugat13e"/><path class="ijvrv6b-m"/></g></g><defs><clipPath id="SVGv3WPqdcU"><path class="j15ty4b9p"/></clipPath><clipPath id="SVG5qy9KbCN"><path class="gvb26tbkk"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:debian-dark"} {...others} />);
}

export default Component;
