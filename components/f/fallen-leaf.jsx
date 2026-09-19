import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dykw83b6k.css';
import '../../css/q/q5xnm_t_s.css';
import '../../css/t/tx-h27bsk.css';
import '../../css/n/n5xurhcec.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="dykw83b6k"/><path class="q5xnm_t_s"/><path class="tx-h27bsk"/><path class="n5xurhcec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:fallen-leaf"} {...others} />);
}

export default Component;
