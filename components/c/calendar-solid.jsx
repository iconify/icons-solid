import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yt3uk3bou.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yt3uk3bou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:calendar-solid"} {...others} />);
}

export default Component;
