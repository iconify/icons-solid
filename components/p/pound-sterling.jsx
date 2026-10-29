import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/owz3mac6q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="owz3mac6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:pound-sterling"} {...others} />);
}

export default Component;
