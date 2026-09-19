import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivgi5xbir.css';

const viewBox = {"width":768,"height":1026};
const content = `<path class="ivgi5xbir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:bluetooth"} {...others} />);
}

export default Component;
