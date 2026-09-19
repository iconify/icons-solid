import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/duaw5cc7b.css';
import '../../css/e/ey7ax6mbr.css';
import '../../css/f/f43nj2b_y.css';
import '../../css/p/p_f4-0bgh.css';
import '../../css/i/i8ygcgcxc.css';
import '../../css/t/tjauieswd.css';
import '../../css/v/vd-wqvbqn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="duaw5cc7b"/><path class="ey7ax6mbr"/><path class="f43nj2b_y"/><path class="p_f4-0bgh"/><path class="i8ygcgcxc"/><path class="tjauieswd"/><path class="vd-wqvbqn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:steamingbowl"} {...others} />);
}

export default Component;
