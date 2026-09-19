import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gjjz6w-nb.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="gjjz6w-nb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:intermediate-event-catch-parallel-multiple"} {...others} />);
}

export default Component;
