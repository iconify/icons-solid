import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rep7jbbtt.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/p39at0bsb.css';
import '../../css/w/w8pay69ez.css';
import '../../css/o/or2hfac0c.css';
import '../../css/u/unnsumvag.css';
import '../../css/f/ft5y_dbte.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGZLonidJi"><path class="rep7jbbtt"/></clipPath></defs><g clip-path="url(#SVGZLonidJi)" transform="translate(0 .3)scale(1.0316)" class="d2kvgvbvc"><path class="p39at0bsb"/><path class="w8pay69ez"/><path class="or2hfac0c"/><path class="unnsumvag"/><path class="ft5y_dbte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:tg-1x1"} {...others} />);
}

export default Component;
