import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o8w7fdczx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o8w7fdczx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:vk-line"} {...others} />);
}

export default Component;
