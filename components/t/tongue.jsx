import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfx70jbuz.css';
import '../../css/i/irwiobbzj.css';
import '../../css/h/hhdmy4bak.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/b/bss1f4bwd.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGVTPunbvN" class="sfx70jbuz"/></defs><path class="irwiobbzj"/><path class="hhdmy4bak"/><g class="ij2x_72vy"><use href="#SVGVTPunbvN"/><use href="#SVGVTPunbvN"/><path class="bss1f4bwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:tongue"} {...others} />);
}

export default Component;
