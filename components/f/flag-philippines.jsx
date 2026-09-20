import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/codjm1acu.css';
import '../../css/h/h8ttso15c.css';
import '../../css/r/ryyz-1bps.css';
import '../../css/k/kxlucmbiy.css';
import '../../css/f/fh2xy0b3d.css';
import '../../css/q/qk2e1no_x.css';
import '../../css/g/g_s__8q2d.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="codjm1acu"/><path class="h8ttso15c"/><path class="ryyz-1bps"/><circle class="kxlucmbiy"/><circle class="fh2xy0b3d"/><circle class="qk2e1no_x"/><path class="g_s__8q2d"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-philippines"} {...others} />);
}

export default Component;
