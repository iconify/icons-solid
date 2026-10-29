import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y4onk9bsq.css';
import '../../css/s/sizrlwbxx.css';
import '../../css/a/aw2ol1bhm.css';
import '../../css/w/wmmytub3d.css';
import '../../css/s/s6ulghbag.css';
import '../../css/q/q-zb6ebnv.css';
import '../../css/r/ryrylbbmd.css';
import '../../css/e/eb7-nru9i.css';
import '../../css/n/n-9yi5bdy.css';
import '../../css/r/rgumuywmw.css';
import '../../css/f/f2yz_xb6l.css';
import '../../css/s/sr7cbtb_g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow y4onk9bsq"/><path class="sizrlwbxx wm-k"/><path class="aw2ol1bhm wm-k"/><path class="wm-k wmmytub3d"/><path class="s6ulghbag wm-k"/><path class="q-zb6ebnv wm-shine"/><path class="ryrylbbmd wm-k"/><path class="eb7-nru9i wm-a"/><path class="n-9yi5bdy wm-a"/><path class="rgumuywmw wm-a"/><path class="f2yz_xb6l wm-a"/><path class="sr7cbtb_g wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:corner-down-left"} {...others} />);
}

export default Component;
