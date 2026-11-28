import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mvzm2hlux.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="mvzm2hlux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:chat-warning-bold"} {...others} />);
}

export default Component;
