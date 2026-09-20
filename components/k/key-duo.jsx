import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w88s_dl0j.css';
import '../../css/f/ffl8ayi5p.css';
import '../../css/j/jxva893bs.css';
import '../../css/x/xobjfpble.css';
import '../../css/i/i72psgb8a.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGw9scfcdR)" class="w88s_dl0j"><path class="ffl8ayi5p"/><path class="jxva893bs"/><path class="xobjfpble"/></g><defs><clipPath id="SVGw9scfcdR"><path class="i72psgb8a"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:key-duo"} {...others} />);
}

export default Component;
