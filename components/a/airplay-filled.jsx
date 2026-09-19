import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sayb-0bmx.css';
import '../../css/i/ircx_pb5h.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="sayb-0bmx"/><path class="ircx_pb5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:airplay-filled"} {...others} />);
}

export default Component;
