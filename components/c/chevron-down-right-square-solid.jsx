import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fa7ifjzpl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fa7ifjzpl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:chevron-down-right-square-solid"} {...others} />);
}

export default Component;
