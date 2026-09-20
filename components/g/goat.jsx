import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qmj_40xrr.css';
import '../../css/f/fu_yyil7h.css';
import '../../css/e/e8ed0bc7f.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/w/wje_roblw.css';
import '../../css/u/uxx5stghf.css';
import '../../css/b/bs2p_wqwk.css';
import '../../css/n/nqy3w-3ne.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="qmj_40xrr"/><path class="fu_yyil7h"/><path class="e8ed0bc7f"/><g class="jn8qy4bru"><path class="wje_roblw"/><path class="uxx5stghf"/><path class="bs2p_wqwk"/><path class="nqy3w-3ne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:goat"} {...others} />);
}

export default Component;
