import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ci3tn5bwh.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="ci3tn5bwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:end-event-compensation"} {...others} />);
}

export default Component;
