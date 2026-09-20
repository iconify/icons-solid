import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kso7adcaj.css';
import '../../css/e/es25eccir.css';
import '../../css/s/sf9bepc3c.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/w/wdiib7zrl.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="kso7adcaj"><circle class="es25eccir"/><path class="sf9bepc3c"/></g><g class="ij2x_72vy"><circle class="es25eccir"/><path class="wdiib7zrl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:twelve-thirty"} {...others} />);
}

export default Component;
