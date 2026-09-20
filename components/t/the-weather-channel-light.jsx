import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j2zc8cbxt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j2zc8cbxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:the-weather-channel-light"} {...others} />);
}

export default Component;
