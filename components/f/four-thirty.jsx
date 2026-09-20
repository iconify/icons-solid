import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x38lsp3xi.css';
import '../../css/k/kso7adcaj.css';
import '../../css/e/es25eccir.css';
import '../../css/i/ij2x_72vy.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGH5D8uzWS" class="x38lsp3xi"/></defs><g class="kso7adcaj"><circle class="es25eccir"/><use href="#SVGH5D8uzWS"/></g><g class="ij2x_72vy"><circle class="es25eccir"/><use href="#SVGH5D8uzWS"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:four-thirty"} {...others} />);
}

export default Component;
