import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/usxh3fzft.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="usxh3fzft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:meeple-circle"} {...others} />);
}

export default Component;
