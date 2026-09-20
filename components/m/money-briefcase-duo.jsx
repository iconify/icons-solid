import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ojynbi8ex.css';
import '../../css/x/x2m2qpbfp.css';
import '../../css/o/o2bnypg2k.css';
import '../../css/h/h4-yz1rqk.css';
import '../../css/z/zbf8pfbqa.css';
import '../../css/i/itr7xmbsj.css';
import '../../css/f/fbrxbpy_x.css';
import '../../css/k/kw6f14hhk.css';
import '../../css/j/j5wqz6yqg.css';
import '../../css/d/d5gwyrbpr.css';
import '../../css/i/i72psgb8a.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGw9scfcdR)" class="ojynbi8ex"><path class="x2m2qpbfp"/><path class="o2bnypg2k"/><path clip-rule="evenodd" class="h4-yz1rqk"/><path class="zbf8pfbqa"/><path class="itr7xmbsj"/><path class="fbrxbpy_x"/><path class="kw6f14hhk"/><path class="j5wqz6yqg"/><path class="d5gwyrbpr"/></g><defs><clipPath id="SVGw9scfcdR"><path class="i72psgb8a"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:money-briefcase-duo"} {...others} />);
}

export default Component;
