import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y7c6r5bnu.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="y7c6r5bnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:chat-bubble-bottom-center-text-16-solid"} {...others} />);
}

export default Component;
