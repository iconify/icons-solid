import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/n/ni3cx4b0q.css';
import '../../css/l/l7ciq6bmm.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><g clip-path="url(#SVGvjfd0dWp)"><path clip-rule="evenodd" class="ni3cx4b0q"/></g><defs><clipPath id="SVGvjfd0dWp"><path class="l7ciq6bmm"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:mysql-light"} {...others} />);
}

export default Component;
