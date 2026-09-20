import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j2falvb-u.css';
import '../../css/l/lq7g9jbol.css';
import '../../css/n/n_-89i9ig.css';

const viewBox = {"width":83,"height":80};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGRJNxRbwH)"><path class="j2falvb-u"/><path class="lq7g9jbol"/></g><defs><clipPath id="SVGRJNxRbwH"><path class="n_-89i9ig"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:photoshop"} {...others} />);
}

export default Component;
