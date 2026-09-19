import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uu0e3j1qf.css';
import '../../css/b/b7-0cyb5z.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsIudNegative0)" class="cuyn6tgcc"><path class="uu0e3j1qf"/><path clip-rule="evenodd" class="b7-0cyb5z"/></g><defs><clipPath id="healthiconsIudNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:iud-negative"} {...others} />);
}

export default Component;
