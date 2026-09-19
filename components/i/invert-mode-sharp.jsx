import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ek96bfbmm.css';
import '../../css/l/lyo-h1s_u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ek96bfbmm"/><path class="lyo-h1s_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:invert-mode-sharp"} {...others} />);
}

export default Component;
