import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/l/l46--2agk.css';
import '../../css/c/cpkugg5ma.css';
import '../../css/t/t1ijvbdyl.css';
import '../../css/b/buxga7syi.css';
import '../../css/z/zm38tmb2p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="l46--2agk"/><path class="cpkugg5ma"/><path class="t1ijvbdyl wm-shine"/><path class="buxga7syi wm-k"/><path class="wm-a zm38tmb2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:passport"} {...others} />);
}

export default Component;
