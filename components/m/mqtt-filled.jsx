import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wy3l7hbqd.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="wy3l7hbqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:mqtt-filled"} {...others} />);
}

export default Component;
