import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-eslmgzw.css';
import '../../css/l/l8spaibhn.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/i18ccachf.css';
import '../../css/j/jsknhx8oy.css';

const viewBox = {"width":618,"height":175};
const content = `<defs><clipPath id="SVGznrs0bni"><path class="i-eslmgzw"/></clipPath></defs><path class="l8spaibhn"/><g clip-path="url(#SVGznrs0bni)" transform="matrix(1.25 0 0 -1.25 -50 271.668)" class="d2kvgvbvc"><path class="i18ccachf"/><path class="jsknhx8oy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:tech-mahindra"} {...others} />);
}

export default Component;
