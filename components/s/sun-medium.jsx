import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y8l8xwn7e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y8l8xwn7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:sun-medium"} {...others} />);
}

export default Component;
