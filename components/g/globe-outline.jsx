import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lpf8b5hfv.css';
import '../../css/p/pinl4fblr.css';
import '../../css/x/xk9q94btg.css';
import '../../css/f/fghgm1b7d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lpf8b5hfv"/><path class="pinl4fblr"/><path class="xk9q94btg"/><path class="fghgm1b7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:globe-outline"} {...others} />);
}

export default Component;
