import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g5xlurb-j.css';
import '../../css/t/thpex1q1k.css';

const viewBox = {"width":54,"height":33};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGMg7Ixb1i)"><path clip-rule="evenodd" class="g5xlurb-j"/></g><defs><clipPath id="SVGMg7Ixb1i"><path class="thpex1q1k"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:tailwind-css"} {...others} />);
}

export default Component;
