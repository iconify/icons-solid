import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h4uk8wrue.css';

const viewBox = {"width":432,"height":432};
const content = `<path class="h4uk8wrue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:alarm-snooze"} {...others} />);
}

export default Component;
