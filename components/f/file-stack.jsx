import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jxn5o4jms.css';
import '../../css/f/ff1k3j4al.css';
import '../../css/m/mdhza1byh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jxn5o4jms"/><path class="ff1k3j4al"/><path class="mdhza1byh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-stack"} {...others} />);
}

export default Component;
