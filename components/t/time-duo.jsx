import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w88s_dl0j.css';
import '../../css/i/i--wutbsq.css';
import '../../css/d/d9z6qlbwj.css';
import '../../css/s/sqeb9s_nf.css';
import '../../css/y/ylfyhfbkk.css';
import '../../css/i/i72psgb8a.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGw9scfcdR)" class="w88s_dl0j"><path class="i--wutbsq"/><path class="d9z6qlbwj"/><path class="sqeb9s_nf"/><path class="ylfyhfbkk"/></g><defs><clipPath id="SVGw9scfcdR"><path class="i72psgb8a"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:time-duo"} {...others} />);
}

export default Component;
