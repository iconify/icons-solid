import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/itc5zdbai.css';
import '../../css/s/s7lyd-ozi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="itc5zdbai"/><path class="s7lyd-ozi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-clock-outline"} {...others} />);
}

export default Component;
