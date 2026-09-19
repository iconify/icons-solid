import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlk19pkqp.css';
import '../../css/w/wuha4vbyk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vlk19pkqp"/><path class="wuha4vbyk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:shahid"} {...others} />);
}

export default Component;
