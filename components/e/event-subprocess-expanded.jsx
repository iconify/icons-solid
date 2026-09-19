import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hz94w__1n.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="hz94w__1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:event-subprocess-expanded"} {...others} />);
}

export default Component;
