import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w-19we0fz.css';
import '../../css/r/re8ix7bot.css';
import '../../css/s/sk9e76x6q.css';
import '../../css/u/u7afm6uep.css';
import '../../css/a/ay0_e2b6k.css';
import '../../css/y/yi2qx72wf.css';
import '../../css/h/hf0go5qsq.css';
import '../../css/g/g3zug7_hx.css';
import '../../css/d/d933nvb0l.css';
import '../../css/n/nk77wwbck.css';
import '../../css/b/b295bxb_f.css';
import '../../css/q/qdb-8u9oc.css';
import '../../css/h/hw_8n5ggj.css';
import '../../css/h/h1u51ib9m.css';
import '../../css/z/zuib26qvp.css';
import '../../css/s/sbsoc4ijy.css';
import '../../css/i/ikf_friii.css';
import '../../css/x/xln1bnbik.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w-19we0fz wm-shadow"/><path class="re8ix7bot wm-k"/><path class="sk9e76x6q wm-k"/><path class="u7afm6uep wm-k"/><path class="ay0_e2b6k wm-k"/><path class="wm-shine yi2qx72wf"/><path class="hf0go5qsq wm-k"/><path class="g3zug7_hx wm-a"/><path class="d933nvb0l wm-a"/><path class="nk77wwbck wm-a"/><path class="b295bxb_f wm-a"/><path class="qdb-8u9oc wm-a"/><path class="hw_8n5ggj wm-a"/><path class="h1u51ib9m wm-k"/><path class="wm-k zuib26qvp"/><path class="sbsoc4ijy wm-k"/><path class="ikf_friii wm-k"/><path class="wm-k xln1bnbik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:mehndi-hand"} {...others} />);
}

export default Component;
