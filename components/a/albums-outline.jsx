import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j92jj3b8h.css';
import '../../css/w/wh8ezzf6j.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="j92jj3b8h"/><path class="wh8ezzf6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:albums-outline"} {...others} />);
}

export default Component;
