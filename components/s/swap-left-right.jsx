import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u70bgjs_u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u70bgjs_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:swap-left-right"} {...others} />);
}

export default Component;
