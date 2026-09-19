import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lg5t6pbfg.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="lg5t6pbfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:chat-bubble-oval-left-20-solid"} {...others} />);
}

export default Component;
