import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uyri__8fx.css';
import '../../css/i/i85pngovn.css';
import '../../css/t/trc_cb1yc.css';
import '../../css/u/uqheekb6z.css';
import '../../css/v/vel16u-9t.css';
import '../../css/j/j-prx2slx.css';
import '../../css/x/xstllqb9v.css';
import '../../css/w/wx_q2iltk.css';
import '../../css/q/qvp-j56qe.css';
import '../../css/n/ne99z7b7k.css';
import '../../css/s/sr0ukizpk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uyri__8fx"/><path class="i85pngovn"/><path class="trc_cb1yc"/><path class="uqheekb6z"/><path class="vel16u-9t"/><path class="j-prx2slx"/><path class="xstllqb9v"/><path class="wx_q2iltk"/><path class="qvp-j56qe"/><path class="ne99z7b7k"/><path class="sr0ukizpk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:red-wine-glass"} {...others} />);
}

export default Component;
