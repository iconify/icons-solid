import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/krzsvb6dy.css';
import '../../css/q/qa4sd1tba.css';
import '../../css/p/pvl2anbys.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGJLYRnb5B)"><path class="krzsvb6dy"/><path class="qa4sd1tba"/></g><defs><clipPath id="SVGJLYRnb5B"><rect class="pvl2anbys"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:webassembly"} {...others} />);
}

export default Component;
