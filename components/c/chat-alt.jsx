import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qdmzamy-y.css';

const viewBox = {"width":520,"height":512};
const content = `<path class="qdmzamy-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:chat-alt"} {...others} />);
}

export default Component;
