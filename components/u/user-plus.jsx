import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ub3005tmi.css';
import '../../css/a/a1b31rbda.css';
import '../../css/r/r8vshccvn.css';
import '../../css/l/lceco-b6y.css';
import '../../css/w/wr5zatb0a.css';
import '../../css/l/l3e5k1b7s.css';
import '../../css/q/qgafwyvpp.css';
import '../../css/n/nklrxebfv.css';
import '../../css/n/nw3la32yu.css';
import '../../css/z/zoxjookyg.css';
import '../../css/n/nb14mhblg.css';
import '../../css/s/subk33bkp.css';
import '../../css/d/d3i63dq-b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ub3005tmi wm-k"/><path class="a1b31rbda wm-k"/><path class="r8vshccvn wm-k"/><path class="lceco-b6y wm-k"/><path class="wm-k wr5zatb0a"/><path class="l3e5k1b7s wm-k"/><path class="qgafwyvpp wm-k"/><path class="nklrxebfv wm-shine"/><path class="nw3la32yu wm-s"/><path class="wm-s zoxjookyg"/><path class="nb14mhblg wm-s"/><path class="subk33bkp wm-shine"/><path class="d3i63dq-b wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:user-plus"} {...others} />);
}

export default Component;
