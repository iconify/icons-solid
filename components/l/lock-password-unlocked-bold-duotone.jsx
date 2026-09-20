import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/feuyj31wv.css';
import '../../css/p/p5pon9bvv.css';
import '../../css/i/i4k5dgufd.css';
import '../../css/k/ktxylym0h.css';
import '../../css/y/ydv50kk3t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="feuyj31wv"/><path class="p5pon9bvv"/><path class="i4k5dgufd"/><path class="ktxylym0h"/><path class="ydv50kk3t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:lock-password-unlocked-bold-duotone"} {...others} />);
}

export default Component;
