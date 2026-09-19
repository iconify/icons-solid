import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/apbrurnes.css';
import '../../css/l/l2l3occ7y.css';
import '../../css/k/kvonv0b0l.css';
import '../../css/z/z12hpj0el.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsIExamQualificationNegative0)" class="cuyn6tgcc"><path class="apbrurnes"/><path clip-rule="evenodd" class="l2l3occ7y"/><path class="kvonv0b0l"/><path clip-rule="evenodd" class="z12hpj0el"/></g><defs><clipPath id="healthiconsIExamQualificationNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:i-exam-qualification-negative"} {...others} />);
}

export default Component;
