import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u5on4pbsr.css';
import '../../css/c/cmfrsh3gh.css';
import '../../css/u/u6s9fpyyj.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGUQHBWbhM)"><path class="u5on4pbsr"/><path class="cmfrsh3gh"/></g><defs><clipPath id="SVGUQHBWbhM"><path class="u6s9fpyyj"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:acrobat-reader-grayscale-app-icon"} {...others} />);
}

export default Component;
