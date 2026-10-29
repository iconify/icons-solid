import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/maimo8bna.css';
import '../../css/i/ia25_fnjm.css';
import '../../css/o/otoo_ifhz.css';
import '../../css/s/s1e2gibpn.css';
import '../../css/e/e9tz1vbtf.css';
import '../../css/j/j_dt9fb7r.css';
import '../../css/x/xrp3vkbvd.css';
import '../../css/j/jnoxfckdr.css';
import '../../css/a/a3w9fctrj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="maimo8bna wm-shadow"/><path class="ia25_fnjm wm-k"/><path class="otoo_ifhz wm-k"/><path class="s1e2gibpn wm-k"/><path class="e9tz1vbtf wm-k"/><path class="j_dt9fb7r wm-shine"/><path class="wm-k xrp3vkbvd"/><path class="jnoxfckdr wm-a"/><path class="a3w9fctrj wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:frown"} {...others} />);
}

export default Component;
