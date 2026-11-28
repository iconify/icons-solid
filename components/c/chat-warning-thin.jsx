import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g0_igibyl.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="g0_igibyl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:chat-warning-thin"} {...others} />);
}

export default Component;
