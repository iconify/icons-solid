import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6hq7dypt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s6hq7dypt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:compass-drafting"} {...others} />);
}

export default Component;
