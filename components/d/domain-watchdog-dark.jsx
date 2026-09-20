import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i4yt86kns.css';
import '../../css/f/fayfq0oyz.css';

const viewBox = {"width":500,"height":500};
const content = `<path class="i4yt86kns"/><path class="fayfq0oyz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:domain-watchdog-dark"} {...others} />);
}

export default Component;
