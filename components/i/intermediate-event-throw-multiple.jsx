import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ey1cel3wh.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="ey1cel3wh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:intermediate-event-throw-multiple"} {...others} />);
}

export default Component;
