import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yntzo7bev.css';
import '../../css/z/zxu1kfb-p.css';
import '../../css/b/b8i95bcam.css';
import '../../css/q/q7ig10bqg.css';
import '../../css/l/ld7dzferc.css';
import '../../css/x/xa5-w_dfk.css';
import '../../css/a/a3wtg3b5o.css';
import '../../css/z/zgd_9tbcf.css';
import '../../css/t/t6vu-obsy.css';
import '../../css/s/s97k37b7k.css';
import '../../css/i/i08jw2bbm.css';
import '../../css/l/lquzct-sn.css';
import '../../css/s/snzt6sbjg.css';
import '../../css/y/y0xy962xc.css';
import '../../css/a/ak4s4ibgs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow yntzo7bev"/><path class="wm-k zxu1kfb-p"/><path class="b8i95bcam wm-k"/><path class="q7ig10bqg wm-k"/><path class="ld7dzferc wm-k"/><path class="wm-k xa5-w_dfk"/><path class="a3wtg3b5o wm-shine"/><path class="wm-a zgd_9tbcf"/><path class="t6vu-obsy wm-a"/><path class="s97k37b7k wm-a"/><path class="i08jw2bbm wm-a"/><path class="lquzct-sn wm-a"/><path class="snzt6sbjg wm-a"/><path class="wm-a y0xy962xc"/><path class="ak4s4ibgs wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:gamepad"} {...others} />);
}

export default Component;
