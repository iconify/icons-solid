import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m-3my0bau.css';
import '../../css/g/gwn35fbgx.css';
import '../../css/c/c8a4e_fzq.css';
import '../../css/d/drq7x3lfe.css';
import '../../css/j/j15ty4b9p.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGv3WPqdcU)"><path class="m-3my0bau"/><path class="gwn35fbgx"/><path class="c8a4e_fzq"/><path class="drq7x3lfe"/></g><defs><clipPath id="SVGv3WPqdcU"><path class="j15ty4b9p"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:yew-dark"} {...others} />);
}

export default Component;
