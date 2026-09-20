import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ewz4qxb1q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ewz4qxb1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"weui:comment-outlined"} {...others} />);
}

export default Component;
