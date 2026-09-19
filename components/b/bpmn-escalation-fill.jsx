import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fw1ho0t9t.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fw1ho0t9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:bpmn-escalation-fill"} {...others} />);
}

export default Component;
