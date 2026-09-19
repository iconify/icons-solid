import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/li-6-8xig.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="li-6-8xig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:backward"} {...others} />);
}

export default Component;
