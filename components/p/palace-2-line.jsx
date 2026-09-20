import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xnwz1hbhm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xnwz1hbhm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:palace-2-line"} {...others} />);
}

export default Component;
