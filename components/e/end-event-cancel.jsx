import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4myg7bgp.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="x4myg7bgp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:end-event-cancel"} {...others} />);
}

export default Component;
