import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lwk2ih8jn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lwk2ih8jn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:audio-input-stereo-minijack"} {...others} />);
}

export default Component;
