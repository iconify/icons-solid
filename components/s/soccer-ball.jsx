import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j7610ybth.css';
import '../../css/f/f5a14lz8y.css';
import '../../css/o/oufyqczij.css';
import '../../css/v/vaqayeb5c.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="j7610ybth"/><path class="f5a14lz8y"/><path class="oufyqczij"/><path clip-rule="evenodd" class="vaqayeb5c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:soccer-ball"} {...others} />);
}

export default Component;
