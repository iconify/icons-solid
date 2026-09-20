import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/db9-40bub.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q8zxzbcvs.css';

const viewBox = {"width":145,"height":32};
const content = `<clipPath id="SVGTztPORtj"><path class="db9-40bub"/></clipPath><g clip-path="url(#SVGTztPORtj)" class="ft5dv1b6b"><path clip-rule="evenodd" class="q8zxzbcvs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:kamal"} {...others} />);
}

export default Component;
