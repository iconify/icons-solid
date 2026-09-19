import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f0_8ic-wl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f0_8ic-wl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:trench-assault"} {...others} />);
}

export default Component;
