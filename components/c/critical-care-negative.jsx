import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yk7vkkbvp.css';
import '../../css/z/zk0gytqrc.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsCriticalCareNegative0)" clip-rule="evenodd" class="n1lsf0bnc"><path class="yk7vkkbvp"/><path class="zk0gytqrc"/></g><defs><clipPath id="healthiconsCriticalCareNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:critical-care-negative"} {...others} />);
}

export default Component;
