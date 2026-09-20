import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w88s_dl0j.css';
import '../../css/s/sqy7305sr.css';
import '../../css/q/q0qaj5b6n.css';
import '../../css/n/nd-dc-bhg.css';
import '../../css/h/h34rnsbet.css';
import '../../css/p/p4umujbsr.css';
import '../../css/x/xwyhcubjp.css';
import '../../css/i/i72psgb8a.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGw9scfcdR)" class="w88s_dl0j"><path class="sqy7305sr"/><path class="q0qaj5b6n"/><path class="nd-dc-bhg"/><path class="h34rnsbet"/><path class="p4umujbsr"/><path class="xwyhcubjp"/></g><defs><clipPath id="SVGw9scfcdR"><path class="i72psgb8a"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:keyboard-direction-duo"} {...others} />);
}

export default Component;
