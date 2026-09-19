import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hoj1bbclk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hoj1bbclk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:dungeon-gate"} {...others} />);
}

export default Component;
