import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qk1dk7bgt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qk1dk7bgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:jet-pack"} {...others} />);
}

export default Component;
