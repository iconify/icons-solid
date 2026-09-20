import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/piqghlb6x.css';
import '../../css/n/nmrfkyelv.css';
import '../../css/n/nmm66kb-n.css';
import '../../css/x/x0o4hpjcz.css';
import '../../css/r/rbdj2y9_j.css';
import '../../css/y/yktfw_b6v.css';
import '../../css/i/i72psgb8a.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGw9scfcdR)" class="piqghlb6x"><path class="nmrfkyelv"/><path class="nmm66kb-n"/><path class="x0o4hpjcz"/><path class="rbdj2y9_j"/><path class="yktfw_b6v"/></g><defs><clipPath id="SVGw9scfcdR"><path class="i72psgb8a"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:3d-duo"} {...others} />);
}

export default Component;
