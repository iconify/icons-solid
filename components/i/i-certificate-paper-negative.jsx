import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c3p9p4b1e.css';
import '../../css/q/qo-cleo8d.css';
import '../../css/d/dhq-fdcki.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsICertificatePaperNegative0)" class="cuyn6tgcc"><path clip-rule="evenodd" class="c3p9p4b1e"/><path class="qo-cleo8d"/><path clip-rule="evenodd" class="dhq-fdcki"/></g><defs><clipPath id="healthiconsICertificatePaperNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:i-certificate-paper-negative"} {...others} />);
}

export default Component;
