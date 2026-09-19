import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vf9jhmmtr.css';
import '../../css/t/t8xrghbkk.css';
import '../../css/o/oawras38v.css';
import '../../css/e/eqakx3b5l.css';
import '../../css/t/tyd2ck6ux.css';
import '../../css/c/ca4462bro.css';
import '../../css/j/jgam23o1x.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="vf9jhmmtr"/><path class="t8xrghbkk"/><path class="oawras38v"/><path class="eqakx3b5l"/><path class="tyd2ck6ux"/><path class="ca4462bro"/><path class="jgam23o1x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:mouse-trap"} {...others} />);
}

export default Component;
