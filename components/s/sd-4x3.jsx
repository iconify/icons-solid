import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nbk05b36b.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/f/fgo_pksht.css';
import '../../css/p/ph3jxnbzf.css';
import '../../css/o/oafavueaw.css';
import '../../css/g/ggalogbdw.css';

const viewBox = {"width":640,"height":480};
const content = `<defs><clipPath id="SVGSJkC5dXi"><path class="nbk05b36b"/></clipPath></defs><g clip-path="url(#SVGSJkC5dXi)" transform="scale(.9375)" class="nv9qcacyl"><path class="fgo_pksht"/><path class="ph3jxnbzf"/><path class="oafavueaw"/><path class="ggalogbdw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:sd-4x3"} {...others} />);
}

export default Component;
