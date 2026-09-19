import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipyo4j7ey.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="ipyo4j7ey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:end-event-link"} {...others} />);
}

export default Component;
