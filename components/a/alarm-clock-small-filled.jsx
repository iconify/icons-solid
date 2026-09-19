import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yze8n3h-u.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="yze8n3h-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:alarm-clock-small-filled"} {...others} />);
}

export default Component;
