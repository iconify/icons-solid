import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j1bsfj-lz.css';
import '../../css/q/qa71dmbqs.css';

const viewBox = {"width":240,"height":28};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGz3CcXdje)"><path class="j1bsfj-lz"/></g><defs><clipPath id="SVGz3CcXdje"><path class="qa71dmbqs"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:voicemod-light"} {...others} />);
}

export default Component;
