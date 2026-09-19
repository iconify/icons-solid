import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e2mqlccww.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="e2mqlccww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:intermediate-event-throw-link"} {...others} />);
}

export default Component;
