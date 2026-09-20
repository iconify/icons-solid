import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fx54jrb3b.css';
import '../../css/v/v4we60c2i.css';

const viewBox = {"width":400,"height":400};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGtGRvv7uU)"><path class="fx54jrb3b"/></g><defs><clipPath id="SVGtGRvv7uU"><path class="v4we60c2i"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:elementor"} {...others} />);
}

export default Component;
