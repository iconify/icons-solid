import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h5o-fccjp.css';
import '../../css/g/g8yveu05c.css';
import '../../css/b/bdqmdob9c.css';
import '../../css/c/c2jjhcymo.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGKBMqkb6d)"><path class="h5o-fccjp"/><path class="g8yveu05c"/><path class="bdqmdob9c"/></g><defs><clipPath id="SVGKBMqkb6d"><path class="c2jjhcymo"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:captivate-prime"} {...others} />);
}

export default Component;
