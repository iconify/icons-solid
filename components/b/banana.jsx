import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lqvl-bbmb.css';
import '../../css/b/bdx4mpb9q.css';
import '../../css/t/t3p218p7s.css';
import '../../css/t/t-48b-6gr.css';
import '../../css/h/hy60grbyj.css';
import '../../css/y/yvmsq-b3p.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="lqvl-bbmb"/><path class="bdx4mpb9q"/><path class="t3p218p7s"/><path class="t-48b-6gr"/><path clip-rule="evenodd" class="hy60grbyj"/><path class="yvmsq-b3p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:banana"} {...others} />);
}

export default Component;
