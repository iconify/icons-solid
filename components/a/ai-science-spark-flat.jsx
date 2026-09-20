import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gt69ahykh.css';
import '../../css/j/j7g2r5bop.css';
import '../../css/o/oydbk9mwq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="gt69ahykh"/><path clip-rule="evenodd" class="j7g2r5bop"/><path clip-rule="evenodd" class="oydbk9mwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:ai-science-spark-flat"} {...others} />);
}

export default Component;
