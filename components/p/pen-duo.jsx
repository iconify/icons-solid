import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/piqghlb6x.css';
import '../../css/r/rev3pob5w.css';
import '../../css/g/ghwtdvbpf.css';
import '../../css/v/v5bdrsaru.css';
import '../../css/f/fulnxc2sw.css';
import '../../css/a/a-2i3j5oq.css';
import '../../css/i/i72psgb8a.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGw9scfcdR)" class="piqghlb6x"><path class="rev3pob5w"/><path class="ghwtdvbpf"/><path class="v5bdrsaru"/><path class="fulnxc2sw"/><path class="a-2i3j5oq"/></g><defs><clipPath id="SVGw9scfcdR"><path class="i72psgb8a"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:pen-duo"} {...others} />);
}

export default Component;
