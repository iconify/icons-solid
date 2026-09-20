import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w4rlsrf5f.css';
import '../../css/k/kso7adcaj.css';
import '../../css/e/es25eccir.css';
import '../../css/i/ij2x_72vy.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGVAiKebRE" class="w4rlsrf5f"/></defs><g class="kso7adcaj"><circle class="es25eccir"/><use href="#SVGVAiKebRE"/></g><g class="ij2x_72vy"><circle class="es25eccir"/><use href="#SVGVAiKebRE"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:two-thirty"} {...others} />);
}

export default Component;
