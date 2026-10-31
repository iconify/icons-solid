import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rnzns78tm.css';
import '../../css/v/v2_zribfl.css';
import '../../css/o/ocufov-8k.css';
import '../../css/z/zsq179bnr.css';
import '../../css/f/fclac8bho.css';
import '../../css/z/z7vwl1bqn.css';
import '../../css/i/i2zlqebzn.css';
import '../../css/i/ixmvlgoez.css';
import '../../css/m/m6l63ykgl.css';
import '../../css/g/g_zq69bqh.css';
import '../../css/w/wrnkhj3qd.css';
import '../../css/w/wa1pgbcay.css';
import '../../css/g/gzasbdctk.css';
import '../../css/x/xzexbdcqm.css';
import '../../css/y/yuh8omdbg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rnzns78tm wm-shadow"/><path class="v2_zribfl wm-deco"/><path class="ocufov-8k wm-k"/><path class="wm-k zsq179bnr"/><path class="fclac8bho wm-k"/><path class="wm-k z7vwl1bqn"/><path class="i2zlqebzn wm-shine"/><path class="ixmvlgoez wm-a"/><path class="m6l63ykgl wm-a"/><path class="g_zq69bqh wm-a"/><path class="wm-a wrnkhj3qd"/><path class="wa1pgbcay wm-shine"/><path class="gzasbdctk wm-a"/><path class="wm-a xzexbdcqm"/><path class="wm-a yuh8omdbg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:eye"} {...others} />);
}

export default Component;
