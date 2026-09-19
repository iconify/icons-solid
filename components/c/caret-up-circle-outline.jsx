import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p5kdt5bwm.css';
import '../../css/l/lsg5j7ibl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p5kdt5bwm"/><path class="lsg5j7ibl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:caret-up-circle-outline"} {...others} />);
}

export default Component;
