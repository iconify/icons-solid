import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vf5p35bga.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="vf5p35bga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:chat-bubble-oval-left-ellipsis-16-solid"} {...others} />);
}

export default Component;
