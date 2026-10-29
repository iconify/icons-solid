import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bbgyxebnx.css';
import '../../css/r/rl7ucuigq.css';
import '../../css/x/xddm2zbct.css';
import '../../css/d/dzsotm65i.css';
import '../../css/i/iq3255b1u.css';
import '../../css/s/sdok4_odi.css';
import '../../css/i/iheflch2n.css';
import '../../css/l/ljceg_bfh.css';
import '../../css/t/tb0nvpmhg.css';
import '../../css/m/myrzsh7ke.css';
import '../../css/n/nv0lzjbws.css';
import '../../css/a/adbo-1b4z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bbgyxebnx wm-shadow"/><path class="rl7ucuigq wm-k"/><path class="wm-k xddm2zbct"/><path class="dzsotm65i wm-k"/><path class="iq3255b1u wm-k"/><path class="sdok4_odi wm-shine"/><path class="iheflch2n wm-a"/><path class="ljceg_bfh wm-a"/><path class="tb0nvpmhg wm-k"/><path class="myrzsh7ke wm-k"/><path class="nv0lzjbws wm-k"/><path class="adbo-1b4z wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:battery-medium"} {...others} />);
}

export default Component;
