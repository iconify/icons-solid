import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ebo-zabye.css';
import '../../css/e/eckkriuue.css';
import '../../css/j/j34hyzbal.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ebo-zabye"/><path class="eckkriuue"/><path class="j34hyzbal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:rock-and-roll-hand"} {...others} />);
}

export default Component;
