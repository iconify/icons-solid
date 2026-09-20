import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fuus5rbmo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fuus5rbmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:full-screen-exit"} {...others} />);
}

export default Component;
