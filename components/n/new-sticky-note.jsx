import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/utucrcc2n.css';
import '../../css/m/mq_q7mahq.css';
import '../../css/d/ddump5v9l.css';
import '../../css/r/rzihfne5q.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="utucrcc2n"/><path class="mq_q7mahq"/><path class="ddump5v9l"/><path class="rzihfne5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:new-sticky-note"} {...others} />);
}

export default Component;
