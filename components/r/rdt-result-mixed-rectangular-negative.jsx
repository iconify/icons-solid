import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eu38z-rxp.css';
import '../../css/a/ayen7jbpw.css';
import '../../css/b/bmpbwubqn.css';
import '../../css/w/wnbv_hhoe.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsRdtResultMixedRectangularNegative0)" class="cuyn6tgcc"><path class="eu38z-rxp"/><path clip-rule="evenodd" class="ayen7jbpw"/><path class="bmpbwubqn"/><path clip-rule="evenodd" class="wnbv_hhoe"/></g><defs><clipPath id="healthiconsRdtResultMixedRectangularNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:rdt-result-mixed-rectangular-negative"} {...others} />);
}

export default Component;
