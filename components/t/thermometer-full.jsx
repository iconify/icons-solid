import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r4jnmdp6q.css';

const viewBox = {"width":256,"height":512};
const content = `<path class="r4jnmdp6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:thermometer-full"} {...others} />);
}

export default Component;
