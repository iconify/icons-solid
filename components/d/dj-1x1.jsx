import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sou09i70h.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z7ysulk2a.css';
import '../../css/f/fri1nrbgj.css';
import '../../css/s/s38etfbjz.css';
import '../../css/e/e_68mbb4a.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGBEOgBb3L"><path class="sou09i70h"/></clipPath></defs><g clip-path="url(#SVGBEOgBb3L)" transform="translate(-40)scale(.722)" class="d2kvgvbvc"><path class="z7ysulk2a"/><path class="fri1nrbgj"/><path class="s38etfbjz"/><path class="e_68mbb4a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:dj-1x1"} {...others} />);
}

export default Component;
