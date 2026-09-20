import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j72t7j6ih.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j72t7j6ih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:chart-bar-increasing-solid"} {...others} />);
}

export default Component;
