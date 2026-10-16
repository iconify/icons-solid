import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhcjdtn8d.css';
import '../../css/l/l8_-m635t.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yhcjdtn8d"/><path class="l8_-m635t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bell-snooze-20"} {...others} />);
}

export default Component;
