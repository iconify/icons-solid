import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_2u1ybfx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r_2u1ybfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:arrowed"} {...others} />);
}

export default Component;
