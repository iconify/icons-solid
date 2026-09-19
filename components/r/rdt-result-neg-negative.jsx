import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eu38z-rxp.css';
import '../../css/a/auwemtbxa.css';
import '../../css/b/bmpbwubqn.css';
import '../../css/r/rg0neqb7s.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsRdtResultNegNegative0)" class="cuyn6tgcc"><path class="eu38z-rxp"/><path clip-rule="evenodd" class="auwemtbxa"/><path class="bmpbwubqn"/><path clip-rule="evenodd" class="rg0neqb7s"/></g><defs><clipPath id="healthiconsRdtResultNegNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:rdt-result-neg-negative"} {...others} />);
}

export default Component;
