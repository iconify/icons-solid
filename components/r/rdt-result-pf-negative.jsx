import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f-ciypbqr.css';
import '../../css/s/simfdlt4j.css';
import '../../css/b/bmpbwubqn.css';
import '../../css/w/wsa4hyrvz.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsRdtResultPfNegative0)" class="cuyn6tgcc"><path class="f-ciypbqr"/><path clip-rule="evenodd" class="simfdlt4j"/><path class="bmpbwubqn"/><path clip-rule="evenodd" class="wsa4hyrvz"/></g><defs><clipPath id="healthiconsRdtResultPfNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:rdt-result-pf-negative"} {...others} />);
}

export default Component;
