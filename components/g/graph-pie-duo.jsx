import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ojynbi8ex.css';
import '../../css/z/zvq8uub_z.css';
import '../../css/y/ylv_jzboq.css';
import '../../css/s/sxp0_zbra.css';
import '../../css/i/iz7lrslql.css';
import '../../css/i/i72psgb8a.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGw9scfcdR)" class="ojynbi8ex"><path class="zvq8uub_z"/><path class="ylv_jzboq"/><path class="sxp0_zbra"/><path class="iz7lrslql"/></g><defs><clipPath id="SVGw9scfcdR"><path class="i72psgb8a"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:graph-pie-duo"} {...others} />);
}

export default Component;
