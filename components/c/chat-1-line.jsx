import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zv3wvxecx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zv3wvxecx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:chat-1-line"} {...others} />);
}

export default Component;
