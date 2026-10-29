import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sabfbibqk.css';
import '../../css/z/z8zrvmbpv.css';
import '../../css/u/u42l0cbvn.css';
import '../../css/e/e4-zqw3fm.css';
import '../../css/o/oayvpo6cl.css';
import '../../css/a/aq1uizvyn.css';
import '../../css/u/ulbwpxeno.css';
import '../../css/q/q9k4_mbek.css';
import '../../css/x/x1nfh-6be.css';
import '../../css/z/ziijvsbhz.css';
import '../../css/n/nmf4yhbsj.css';
import '../../css/k/knmqpra1a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sabfbibqk wm-shadow"/><path class="wm-k z8zrvmbpv"/><path class="u42l0cbvn wm-k"/><path class="e4-zqw3fm wm-k"/><path class="oayvpo6cl wm-k"/><path class="aq1uizvyn wm-k"/><path class="ulbwpxeno wm-shine"/><path class="q9k4_mbek wm-a"/><path class="wm-a x1nfh-6be"/><path class="wm-a ziijvsbhz"/><path class="nmf4yhbsj wm-a"/><path class="knmqpra1a wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:cherry"} {...others} />);
}

export default Component;
