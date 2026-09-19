import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m1vuaccwo.css';
import '../../css/c/cw0l96b5a.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsDefaultNegative0)" class="cuyn6tgcc"><path class="m1vuaccwo"/><path clip-rule="evenodd" class="cw0l96b5a"/></g><defs><clipPath id="healthiconsDefaultNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:default-negative"} {...others} />);
}

export default Component;
