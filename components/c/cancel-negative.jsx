import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qbf-7cc6a.css';
import '../../css/k/k86tlqb7u.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsCancelNegative0)" class="cuyn6tgcc"><path class="qbf-7cc6a"/><path clip-rule="evenodd" class="k86tlqb7u"/></g><defs><clipPath id="healthiconsCancelNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:cancel-negative"} {...others} />);
}

export default Component;
