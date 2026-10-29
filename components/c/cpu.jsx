import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aza_gibnt.css';
import '../../css/g/gp6by--jw.css';
import '../../css/n/noynoqbho.css';
import '../../css/o/oi0y-2b5g.css';
import '../../css/z/zq2rqzetf.css';
import '../../css/i/iwd_1mb1d.css';
import '../../css/h/hab22ybyz.css';
import '../../css/b/b1avf1spc.css';
import '../../css/g/gikg42d4p.css';
import '../../css/g/gi45927tg.css';
import '../../css/x/xdjc0jbve.css';
import '../../css/g/g5l3b_4nq.css';
import '../../css/v/v21hgr0ny.css';
import '../../css/s/sk_zfoboo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aza_gibnt wm-shadow"/><path class="gp6by--jw wm-k"/><path class="noynoqbho wm-k"/><path class="oi0y-2b5g wm-k"/><path class="wm-k zq2rqzetf"/><path class="iwd_1mb1d wm-k"/><path class="hab22ybyz wm-shine"/><path class="b1avf1spc wm-k"/><path class="gikg42d4p wm-a"/><path class="gi45927tg wm-a"/><path class="wm-a xdjc0jbve"/><path class="g5l3b_4nq wm-a"/><path class="v21hgr0ny wm-a"/><path class="sk_zfoboo wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:cpu"} {...others} />);
}

export default Component;
