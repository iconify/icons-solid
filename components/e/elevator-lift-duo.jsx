import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/piqghlb6x.css';
import '../../css/o/oqv7pccmj.css';
import '../../css/b/b39q86g6b.css';
import '../../css/z/zyo-v0nkc.css';
import '../../css/i/i72psgb8a.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGw9scfcdR)" class="piqghlb6x"><path class="oqv7pccmj"/><path class="b39q86g6b"/><path class="zyo-v0nkc"/></g><defs><clipPath id="SVGw9scfcdR"><path class="i72psgb8a"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:elevator-lift-duo"} {...others} />);
}

export default Component;
