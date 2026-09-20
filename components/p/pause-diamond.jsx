import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jb4f1dvhe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jb4f1dvhe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:pause-diamond"} {...others} />);
}

export default Component;
