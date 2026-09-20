import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o1o83u96m.css';
import '../../css/r/r343qthee.css';
import '../../css/f/fs8879b-p.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="o1o83u96m"/><path clip-rule="evenodd" class="r343qthee"/><path class="fs8879b-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:notification-alarm-2"} {...others} />);
}

export default Component;
