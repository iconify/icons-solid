import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gfgwycbvf.css';
import '../../css/q/qrjy62zvv.css';
import '../../css/b/b-xdjsx7h.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="gfgwycbvf"/><g clip-path="url(#SVGKXSAsd8x)"><path class="qrjy62zvv"/></g><defs><clipPath id="SVGKXSAsd8x"><path class="b-xdjsx7h"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:discord"} {...others} />);
}

export default Component;
