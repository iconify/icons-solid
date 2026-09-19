import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-8ikw0ph.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="s-8ikw0ph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:bpmn-error-outline"} {...others} />);
}

export default Component;
