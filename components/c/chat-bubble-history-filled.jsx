import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pak4c7bdi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pak4c7bdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:chat-bubble-history-filled"} {...others} />);
}

export default Component;
