import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c2sd54bcm.css';
import '../../css/j/jkzaizbed.css';
import '../../css/p/peqjldbmx.css';
import '../../css/q/q4l54cb7c.css';
import '../../css/q/q_6j_abid.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="c2sd54bcm"/><path class="jkzaizbed"/><path class="peqjldbmx"/><path class="q4l54cb7c"/><path class="q_6j_abid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:expand"} {...others} />);
}

export default Component;
