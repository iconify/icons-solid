import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fk2xf4b7n.css';
import '../../css/y/ydifxbg7w.css';
import '../../css/f/fnto8k2ux.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsTesticlesNegative0)" class="cuyn6tgcc"><path clip-rule="evenodd" class="fk2xf4b7n"/><path class="ydifxbg7w"/><path clip-rule="evenodd" class="fnto8k2ux"/></g><defs><clipPath id="healthiconsTesticlesNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:testicles-negative"} {...others} />);
}

export default Component;
