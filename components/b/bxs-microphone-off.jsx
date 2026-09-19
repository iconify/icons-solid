import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l4-y6jbck.css';
import '../../css/h/hu2vwjy5d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l4-y6jbck"/><path class="hu2vwjy5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-microphone-off"} {...others} />);
}

export default Component;
