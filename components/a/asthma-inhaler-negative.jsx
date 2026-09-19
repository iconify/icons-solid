import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vr1sp4wvj.css';
import '../../css/w/wk8xqn0-q.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsAsthmaInhalerNegative0)" class="cuyn6tgcc"><path class="vr1sp4wvj"/><path clip-rule="evenodd" class="wk8xqn0-q"/></g><defs><clipPath id="healthiconsAsthmaInhalerNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:asthma-inhaler-negative"} {...others} />);
}

export default Component;
