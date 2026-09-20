import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pgm1b6z5u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pgm1b6z5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:electrical-energy-filled"} {...others} />);
}

export default Component;
