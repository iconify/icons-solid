import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m-3my0bau.css';
import '../../css/t/twvsdh6gv.css';
import '../../css/w/w51lipyhi.css';
import '../../css/j/j15ty4b9p.css';
import '../../css/z/zhj0oyzae.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGv3WPqdcU)"><path class="m-3my0bau"/><g clip-path="url(#SVGH4d9vd6n)"><path class="twvsdh6gv"/><path class="w51lipyhi"/></g></g><defs><clipPath id="SVGv3WPqdcU"><path class="j15ty4b9p"/></clipPath><clipPath id="SVGH4d9vd6n"><path class="zhj0oyzae"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:npm-dark"} {...others} />);
}

export default Component;
