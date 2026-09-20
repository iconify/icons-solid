import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1wfzibcr.css';
import '../../css/q/qrfulp6ea.css';
import '../../css/o/o8m8bzyzx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n1wfzibcr"/><path class="qrfulp6ea"/><path class="o8m8bzyzx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:fork-knife"} {...others} />);
}

export default Component;
