import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f-ciypbqr.css';
import '../../css/g/gvtro4bsn.css';
import '../../css/k/kym_0dchu.css';
import '../../css/a/am_wdli9k.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsRdtResultPfInvalidNegative0)" class="cuyn6tgcc"><path class="f-ciypbqr"/><path clip-rule="evenodd" class="gvtro4bsn"/><path class="kym_0dchu"/><path clip-rule="evenodd" class="am_wdli9k"/></g><defs><clipPath id="healthiconsRdtResultPfInvalidNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:rdt-result-pf-invalid-negative"} {...others} />);
}

export default Component;
