import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h65tdvo6n.css';
import '../../css/c/co5t-dbao.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h65tdvo6n"/><path class="co5t-dbao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-videos"} {...others} />);
}

export default Component;
