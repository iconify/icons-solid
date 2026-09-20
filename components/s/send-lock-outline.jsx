import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jvvarbbal.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jvvarbbal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:send-lock-outline"} {...others} />);
}

export default Component;
