import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jdg0_mb9m.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="jdg0_mb9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:lane"} {...others} />);
}

export default Component;
