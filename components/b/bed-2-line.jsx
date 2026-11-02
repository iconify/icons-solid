import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oi3xz7l2q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oi3xz7l2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:bed-2-line"} {...others} />);
}

export default Component;
