import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zk-tdu_gx.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zk-tdu_gx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:chat-bubble-left-16-solid"} {...others} />);
}

export default Component;
