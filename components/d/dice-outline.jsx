import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/no18gackv.css';
import '../../css/e/e9f-1ebjm.css';
import '../../css/x/x0yn8fy4w.css';
import '../../css/f/f54ypcc_u.css';
import '../../css/s/sjkw2zvxn.css';
import '../../css/x/xra4kabrq.css';
import '../../css/u/urhitzbtp.css';
import '../../css/z/zv0djwb_a.css';
import '../../css/u/ulabds1sw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="no18gackv"/><path class="e9f-1ebjm"/><ellipse class="x0yn8fy4w"/><ellipse class="f54ypcc_u"/><ellipse class="sjkw2zvxn"/><ellipse class="xra4kabrq"/><ellipse class="urhitzbtp"/><ellipse class="zv0djwb_a"/><ellipse class="ulabds1sw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:dice-outline"} {...others} />);
}

export default Component;
