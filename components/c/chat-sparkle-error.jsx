import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j042-s57z.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="j042-s57z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:chat-sparkle-error"} {...others} />);
}

export default Component;
