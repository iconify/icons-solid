import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i2vwe58tk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i2vwe58tk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:chatbox-ellipses"} {...others} />);
}

export default Component;
