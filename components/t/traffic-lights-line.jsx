import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dk4n-xbhm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dk4n-xbhm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:traffic-lights-line"} {...others} />);
}

export default Component;
