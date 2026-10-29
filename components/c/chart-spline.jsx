import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zgljxqb1n.css';
import '../../css/d/dy5snobgp.css';
import '../../css/a/a2-s37bsg.css';
import '../../css/k/k35r0jaqn.css';
import '../../css/g/gtl5ggbnz.css';
import '../../css/b/buby945df.css';
import '../../css/z/zywxgbcxm.css';
import '../../css/n/nh-5657cd.css';
import '../../css/k/k4qtv0bkh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow zgljxqb1n"/><path class="dy5snobgp wm-shadow"/><path class="a2-s37bsg"/><path class="k35r0jaqn"/><path class="gtl5ggbnz"/><path class="buby945df"/><path class="wm-shine zywxgbcxm"/><path class="nh-5657cd wm-shine"/><path class="k4qtv0bkh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:chart-spline"} {...others} />);
}

export default Component;
