import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eh7qx1bct.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eh7qx1bct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:sidebar-unfold-line"} {...others} />);
}

export default Component;
