import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jf4v97bvm.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="jf4v97bvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:gateway-eventbased"} {...others} />);
}

export default Component;
