import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p2x11_bxr.css';
import '../../css/k/kso7adcaj.css';
import '../../css/e/es25eccir.css';
import '../../css/i/ij2x_72vy.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGo3sIfGZN" class="p2x11_bxr"/></defs><g class="kso7adcaj"><circle class="es25eccir"/><use href="#SVGo3sIfGZN"/></g><g class="ij2x_72vy"><circle class="es25eccir"/><use href="#SVGo3sIfGZN"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:seven-oclock"} {...others} />);
}

export default Component;
