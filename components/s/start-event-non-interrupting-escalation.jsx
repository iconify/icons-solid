import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pv0dxxbxv.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="pv0dxxbxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:start-event-non-interrupting-escalation"} {...others} />);
}

export default Component;
