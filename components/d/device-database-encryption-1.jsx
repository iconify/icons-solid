import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gr91tebop.css';
import '../../css/h/hjmq2jv1q.css';
import '../../css/q/qfrwy8bml.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="gr91tebop"/><path class="hjmq2jv1q"/><path class="qfrwy8bml"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:device-database-encryption-1"} {...others} />);
}

export default Component;
