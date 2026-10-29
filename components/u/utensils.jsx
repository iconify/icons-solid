import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwv6fdcoh.css';
import '../../css/l/lpj21hzud.css';
import '../../css/d/dt0ycdbmx.css';
import '../../css/u/uejge0b-c.css';
import '../../css/s/skr06_82h.css';
import '../../css/s/s0f9ywb-a.css';
import '../../css/t/tv1u0mbjz.css';
import '../../css/y/ysc2lzbnn.css';
import '../../css/s/s7d_l197d.css';
import '../../css/t/t3mm-sbbe.css';
import '../../css/h/htu8rs7je.css';
import '../../css/d/dmzu5abzq.css';
import '../../css/t/t_ful_bht.css';
import '../../css/g/gtuhvqbiv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow wwv6fdcoh"/><path class="lpj21hzud wm-k"/><path class="dt0ycdbmx wm-k"/><path class="uejge0b-c wm-k"/><path class="skr06_82h wm-k"/><path class="s0f9ywb-a wm-k"/><path class="tv1u0mbjz wm-shine"/><path class="wm-a ysc2lzbnn"/><path class="s7d_l197d wm-a"/><path class="t3mm-sbbe wm-a"/><path class="htu8rs7je wm-a"/><path class="dmzu5abzq wm-a"/><path class="t_ful_bht wm-a"/><path class="gtuhvqbiv wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:utensils"} {...others} />);
}

export default Component;
