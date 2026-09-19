import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lu-74desw.css';
import '../../css/t/ty2vo4ljz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lu-74desw"/><path class="ty2vo4ljz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:football"} {...others} />);
}

export default Component;
