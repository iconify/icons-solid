import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jruk4-ytp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jruk4-ytp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:turtle-shell"} {...others} />);
}

export default Component;
