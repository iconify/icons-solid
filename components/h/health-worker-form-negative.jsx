import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ufrpysb8b.css';
import '../../css/k/kwg3dqo6v.css';
import '../../css/c/cupmp0bfd.css';
import '../../css/u/udm10e96q.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsHealthWorkerFormNegative0)" class="cuyn6tgcc"><path class="ufrpysb8b"/><path clip-rule="evenodd" class="kwg3dqo6v"/><path class="cupmp0bfd"/><path clip-rule="evenodd" class="udm10e96q"/></g><defs><clipPath id="healthiconsHealthWorkerFormNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:health-worker-form-negative"} {...others} />);
}

export default Component;
