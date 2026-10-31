import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r4jnpqbix.css';
import '../../css/r/r86610lvv.css';
import '../../css/v/vx3rkeb0y.css';
import '../../css/e/e7ps71b7n.css';
import '../../css/g/gxqexoblc.css';
import '../../css/l/ls7ew-r3t.css';
import '../../css/w/w_qfs4ncj.css';
import '../../css/r/rhp_fs-re.css';
import '../../css/s/s8soj7cms.css';
import '../../css/w/w_1b5yzry.css';
import '../../css/t/tz93kxw7q.css';
import '../../css/q/qv1bdjbpw.css';
import '../../css/v/vc1jfyb4r.css';
import '../../css/f/ff_vxx9ck.css';
import '../../css/k/kq2icvb-q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r4jnpqbix wm-shadow"/><path class="r86610lvv wm-k"/><path class="vx3rkeb0y wm-k"/><path class="e7ps71b7n wm-k"/><path class="gxqexoblc wm-k"/><path class="ls7ew-r3t wm-shine"/><path class="w_qfs4ncj wm-a"/><path class="rhp_fs-re wm-a"/><path class="s8soj7cms wm-a"/><path class="w_1b5yzry wm-a"/><path class="tz93kxw7q wm-shine"/><path class="qv1bdjbpw wm-a"/><path class="vc1jfyb4r wm-k"/><path class="ff_vxx9ck wm-k"/><path class="kq2icvb-q wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:clapperboard"} {...others} />);
}

export default Component;
