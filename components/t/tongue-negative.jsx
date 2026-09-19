import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qrxwnpbxg.css';
import '../../css/o/owcquwb3a.css';
import '../../css/l/lj_iaub6h.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsTongueNegative0)" class="cuyn6tgcc"><path clip-rule="evenodd" class="qrxwnpbxg"/><path class="owcquwb3a"/><path clip-rule="evenodd" class="lj_iaub6h"/></g><defs><clipPath id="healthiconsTongueNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:tongue-negative"} {...others} />);
}

export default Component;
