import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pt0refx9e.css';
import '../../css/i/i4fx2xxfr.css';
import '../../css/b/b-m8swbym.css';
import '../../css/o/o3o8_cc_a.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsSynergistInsecticideBioassaysNegative0)" class="cuyn6tgcc"><path class="pt0refx9e"/><path clip-rule="evenodd" class="i4fx2xxfr"/><path class="b-m8swbym"/><path clip-rule="evenodd" class="o3o8_cc_a"/></g><defs><clipPath id="healthiconsSynergistInsecticideBioassaysNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:synergist-insecticide-bioassays-negative"} {...others} />);
}

export default Component;
