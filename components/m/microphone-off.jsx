import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ua71p0bsg.css';
import '../../css/l/lnske1bsc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ua71p0bsg"/><path class="lnske1bsc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:microphone-off"} {...others} />);
}

export default Component;
