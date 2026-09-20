import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jdc0jy-gw.css';
import '../../css/i/ig-dzq6hv.css';
import '../../css/y/y461-kzaq.css';
import '../../css/z/z04drlb1l.css';
import '../../css/e/egpbgacvo.css';
import '../../css/v/vj6qn97rn.css';
import '../../css/g/g3o9v6e0v.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGCf14NcSN" class="jdc0jy-gw"/></defs><g class="ig-dzq6hv"><use href="#SVGCf14NcSN"/><path class="y461-kzaq"/><use href="#SVGCf14NcSN"/></g><g class="z04drlb1l"><path class="egpbgacvo"/><path class="vj6qn97rn"/><path class="g3o9v6e0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:sign-of-the-horns-light-skin-tone"} {...others} />);
}

export default Component;
