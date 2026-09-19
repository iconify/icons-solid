import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m9fjxybcp.css';
import '../../css/g/gu823pbaz.css';
import '../../css/p/pppv1vbqy.css';
import '../../css/r/r4_l7zr_t.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsIExamMultipleChoiceNegative0)" class="cuyn6tgcc"><path class="m9fjxybcp"/><path clip-rule="evenodd" class="gu823pbaz"/><path class="pppv1vbqy"/><path clip-rule="evenodd" class="r4_l7zr_t"/></g><defs><clipPath id="healthiconsIExamMultipleChoiceNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:i-exam-multiple-choice-negative"} {...others} />);
}

export default Component;
