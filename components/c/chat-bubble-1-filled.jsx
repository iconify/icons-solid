import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iuqpfgb0c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iuqpfgb0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:chat-bubble-1-filled"} {...others} />);
}

export default Component;
