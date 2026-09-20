import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n6m2w-bsk.css';
import '../../css/t/te9uliuvg.css';
import '../../css/j/j15ty4b9p.css';
import '../../css/g/gvb26tbkk.css';
import '../../css/b/bwuxu7bdj.css';
import '../../css/z/zkrs_kb_e.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGv3WPqdcU)"><path class="n6m2w-bsk"/><g clip-path="url(#SVG5qy9KbCN)"><path fill="url(#SVGNNwHKbev)" class="te9uliuvg"/></g></g><defs><clipPath id="SVGv3WPqdcU"><path class="j15ty4b9p"/></clipPath><clipPath id="SVG5qy9KbCN"><path class="gvb26tbkk"/></clipPath><linearGradient id="SVGNNwHKbev" x1="39.995" x2="209.164" y1="42.279" y2="205.503" gradientUnits="userSpaceOnUse"><stop class="bwuxu7bdj"/><stop offset="1" class="zkrs_kb_e"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:vscodium-light"} {...others} />);
}

export default Component;
