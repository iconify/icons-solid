import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ycchd8gvg.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="ycchd8gvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:end-event-signal"} {...others} />);
}

export default Component;
