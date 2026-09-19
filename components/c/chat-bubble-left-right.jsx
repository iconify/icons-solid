import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pagw__b7y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pagw__b7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-outline:chat-bubble-left-right"} {...others} />);
}

export default Component;
