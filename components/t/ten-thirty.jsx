import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cir6d3sah.css';
import '../../css/k/kso7adcaj.css';
import '../../css/e/es25eccir.css';
import '../../css/i/ij2x_72vy.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGBZtCsJSa" class="cir6d3sah"/></defs><g class="kso7adcaj"><circle class="es25eccir"/><use href="#SVGBZtCsJSa"/></g><g class="ij2x_72vy"><circle class="es25eccir"/><use href="#SVGBZtCsJSa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:ten-thirty"} {...others} />);
}

export default Component;
