import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ojynbi8ex.css';
import '../../css/r/rbf51mb_m.css';
import '../../css/z/zq3jw1gtb.css';
import '../../css/j/j54_qfb7s.css';
import '../../css/z/zzxn1_zzr.css';
import '../../css/i/i72psgb8a.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGw9scfcdR)" class="ojynbi8ex"><path class="rbf51mb_m"/><path class="zq3jw1gtb"/><path class="j54_qfb7s"/><path class="zzxn1_zzr"/></g><defs><clipPath id="SVGw9scfcdR"><path class="i72psgb8a"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:labtop-duo"} {...others} />);
}

export default Component;
