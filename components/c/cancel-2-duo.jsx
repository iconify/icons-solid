import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w88s_dl0j.css';
import '../../css/o/ob5p6mbbc.css';
import '../../css/w/w-ludz_2h.css';
import '../../css/q/q8e4d1b2s.css';
import '../../css/i/i72psgb8a.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGw9scfcdR)" class="w88s_dl0j"><path class="ob5p6mbbc"/><path class="w-ludz_2h"/><path class="q8e4d1b2s"/></g><defs><clipPath id="SVGw9scfcdR"><path class="i72psgb8a"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:cancel-2-duo"} {...others} />);
}

export default Component;
