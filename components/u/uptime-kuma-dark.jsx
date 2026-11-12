import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j14wnj9wd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j14wnj9wd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:uptime-kuma-dark"} {...others} />);
}

export default Component;
