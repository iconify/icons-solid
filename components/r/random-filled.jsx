import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/df3m-8ghh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="df3m-8ghh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:random-filled"} {...others} />);
}

export default Component;
