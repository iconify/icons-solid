import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5bo-kbda.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="h5bo-kbda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:start-event-non-interrupting-message"} {...others} />);
}

export default Component;
