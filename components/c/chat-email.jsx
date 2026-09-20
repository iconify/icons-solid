import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cpqfbubif.css';
import '../../css/m/m4dq5vbyd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cpqfbubif"/><path class="m4dq5vbyd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:chat-email"} {...others} />);
}

export default Component;
