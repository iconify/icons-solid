import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x644agbfs.css';
import '../../css/u/u15rypvqj.css';
import '../../css/q/q4o552b_p.css';
import '../../css/j/jvku62s7d.css';
import '../../css/h/h8z-9rb0y.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="x644agbfs"/><path class="u15rypvqj"/><path class="q4o552b_p"/><path class="jvku62s7d"/><path class="h8z-9rb0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:candle"} {...others} />);
}

export default Component;
