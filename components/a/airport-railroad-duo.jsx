import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ojynbi8ex.css';
import '../../css/z/z06q6o-kl.css';
import '../../css/w/wh2t0b06d.css';
import '../../css/p/prn5p6bdf.css';
import '../../css/i/iuxmxdb8x.css';
import '../../css/c/czuu7obxu.css';
import '../../css/u/uie98lbxg.css';
import '../../css/w/w206-lzrg.css';
import '../../css/u/uat9yz20l.css';
import '../../css/l/l0jwhjzfm.css';
import '../../css/n/n3uyeebdc.css';
import '../../css/v/vip77jbtd.css';
import '../../css/j/jm_mnox4v.css';
import '../../css/s/sqfkbfubd.css';
import '../../css/i/i72psgb8a.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGw9scfcdR)" class="ojynbi8ex"><path class="z06q6o-kl"/><path class="wh2t0b06d"/><path class="prn5p6bdf"/><path class="iuxmxdb8x"/><path class="czuu7obxu"/><path class="uie98lbxg"/><path class="w206-lzrg"/><path class="uat9yz20l"/><path class="l0jwhjzfm"/><path class="n3uyeebdc"/><path class="vip77jbtd"/><path class="jm_mnox4v"/><path class="sqfkbfubd"/></g><defs><clipPath id="SVGw9scfcdR"><path class="i72psgb8a"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:airport-railroad-duo"} {...others} />);
}

export default Component;
