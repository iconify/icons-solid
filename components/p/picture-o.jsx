import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qv7-5d-vk.css';

const viewBox = {"width":1920,"height":1536};
const content = `<path class="qv7-5d-vk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:picture-o"} {...others} />);
}

export default Component;
