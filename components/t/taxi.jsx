import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nd98dbd-u.css';

const viewBox = {"width":1024,"height":1023};
const content = `<path class="nd98dbd-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:taxi"} {...others} />);
}

export default Component;
