import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ev3r4g_nh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ev3r4g_nh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:xls-line"} {...others} />);
}

export default Component;
