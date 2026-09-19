import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f-ciypbqr.css';
import '../../css/w/wez3jib_f.css';
import '../../css/b/bmpbwubqn.css';
import '../../css/w/wsa4hyrvz.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsRdtResultMixedInvalidNegative0)" class="cuyn6tgcc"><path class="f-ciypbqr"/><path clip-rule="evenodd" class="wez3jib_f"/><path class="bmpbwubqn"/><path clip-rule="evenodd" class="wsa4hyrvz"/></g><defs><clipPath id="healthiconsRdtResultMixedInvalidNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:rdt-result-mixed-invalid-negative"} {...others} />);
}

export default Component;
