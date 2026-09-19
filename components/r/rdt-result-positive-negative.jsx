import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r8f7u0bby.css';
import '../../css/a/amnpvd91d.css';
import '../../css/j/jxt58o6cf.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsRdtResultPositiveNegative0)" class="cuyn6tgcc"><path class="r8f7u0bby"/><path clip-rule="evenodd" class="amnpvd91d"/><path clip-rule="evenodd" class="jxt58o6cf"/></g><defs><clipPath id="healthiconsRdtResultPositiveNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:rdt-result-positive-negative"} {...others} />);
}

export default Component;
