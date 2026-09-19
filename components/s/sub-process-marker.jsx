import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iwub5-btk.css';

const viewBox = {"width":2000,"height":2000};
const content = `<path class="iwub5-btk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:sub-process-marker"} {...others} />);
}

export default Component;
