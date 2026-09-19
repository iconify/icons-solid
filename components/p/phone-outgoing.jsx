import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/d/d4oyb2wqm.css';
import '../../css/d/ds6rclvfa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="d4oyb2wqm"/><path class="ds6rclvfa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:phone-outgoing"} {...others} />);
}

export default Component;
