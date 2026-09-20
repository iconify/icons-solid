import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/epnq9jrju.css';
import '../../css/k/kso7adcaj.css';
import '../../css/e/es25eccir.css';
import '../../css/i/ij2x_72vy.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGXaJOKb7M" class="epnq9jrju"/></defs><g class="kso7adcaj"><circle class="es25eccir"/><use href="#SVGXaJOKb7M"/></g><g class="ij2x_72vy"><circle class="es25eccir"/><use href="#SVGXaJOKb7M"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:six-thirty"} {...others} />);
}

export default Component;
