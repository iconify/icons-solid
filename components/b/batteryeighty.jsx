import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hid7nkb9w.css';

const viewBox = {"width":1024,"height":768};
const content = `<path class="hid7nkb9w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:batteryeighty"} {...others} />);
}

export default Component;
