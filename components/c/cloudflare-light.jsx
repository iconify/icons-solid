import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/k/kun2cgppe.css';
import '../../css/m/ml81n7b_g.css';
import '../../css/y/y9_52abga.css';
import '../../css/j/j9n-wgfhi.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><g clip-path="url(#SVGg3D4Hd7H)"><path class="kun2cgppe"/><path class="ml81n7b_g"/><path class="y9_52abga"/></g><defs><clipPath id="SVGg3D4Hd7H"><path class="j9n-wgfhi"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:cloudflare-light"} {...others} />);
}

export default Component;
