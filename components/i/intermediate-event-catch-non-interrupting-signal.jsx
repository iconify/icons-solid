import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/klu-8qj5j.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="klu-8qj5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:intermediate-event-catch-non-interrupting-signal"} {...others} />);
}

export default Component;
