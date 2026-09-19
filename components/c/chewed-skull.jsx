import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j37pk-bgo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j37pk-bgo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:chewed-skull"} {...others} />);
}

export default Component;
