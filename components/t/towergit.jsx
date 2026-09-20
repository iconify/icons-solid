import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ikqlyhbgr.css';
import '../../css/g/gqafr3b2n.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wmphhwwhd.css';
import '../../css/x/x9mb3tbzd.css';
import '../../css/h/hrkh0kbcx.css';
import '../../css/v/vt6p7yg_m.css';

const viewBox = {"width":128,"height":128};
const content = `<defs><path id="SVG1kptBcNC" class="ikqlyhbgr"/><path id="SVGXzoTbcoO" class="gqafr3b2n"/></defs><g class="cuyn6tgcc"><path class="wmphhwwhd"/><path class="x9mb3tbzd"/><use href="#SVG1kptBcNC"/><use href="#SVGXzoTbcoO"/></g><g class="hrkh0kbcx"><use href="#SVGXzoTbcoO"/><use href="#SVG1kptBcNC"/></g><path class="vt6p7yg_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:towergit"} {...others} />);
}

export default Component;
