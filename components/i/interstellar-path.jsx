import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/df8ps71ge.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="df8ps71ge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:interstellar-path"} {...others} />);
}

export default Component;
