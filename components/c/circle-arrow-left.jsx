import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/maimo8bna.css';
import '../../css/i/ia25_fnjm.css';
import '../../css/n/n8x36acya.css';
import '../../css/s/s1e2gibpn.css';
import '../../css/e/e9tz1vbtf.css';
import '../../css/j/j_dt9fb7r.css';
import '../../css/s/s03w5k5hh.css';
import '../../css/k/kr9x9mboo.css';
import '../../css/i/ip_fd-bdm.css';
import '../../css/h/hoc081bat.css';
import '../../css/e/e_wy7hbra.css';
import '../../css/r/rzeafgbrv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="maimo8bna wm-shadow"/><path class="ia25_fnjm wm-k"/><path class="n8x36acya wm-k"/><path class="s1e2gibpn wm-k"/><path class="e9tz1vbtf wm-k"/><path class="j_dt9fb7r wm-shine"/><path class="s03w5k5hh wm-k"/><path class="kr9x9mboo wm-a"/><path class="ip_fd-bdm wm-a"/><path class="hoc081bat wm-a"/><path class="e_wy7hbra wm-a"/><path class="rzeafgbrv wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:circle-arrow-left"} {...others} />);
}

export default Component;
