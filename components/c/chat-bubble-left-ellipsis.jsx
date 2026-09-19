import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aqe1pt4jt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aqe1pt4jt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:chat-bubble-left-ellipsis"} {...others} />);
}

export default Component;
