import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f4ylmckef.css';
import '../../css/h/htohhkvke.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f4ylmckef"/><path class="htohhkvke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:cloudy-night-outline"} {...others} />);
}

export default Component;
