import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xqo9k0b7j.css';
import '../../css/r/r9yno8bmh.css';
import '../../css/r/r78d-q55y.css';
import '../../css/b/b_ndibcqt.css';
import '../../css/k/k32lmcc5v.css';
import '../../css/m/mksbflonw.css';
import '../../css/g/g98l1dbzi.css';
import '../../css/x/x4n0n34se.css';
import '../../css/w/wbcqrvmba.css';
import '../../css/r/reb7a6bqj.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="xqo9k0b7j"/><circle class="r9yno8bmh"/><path class="r78d-q55y"/><path class="b_ndibcqt"/><path class="k32lmcc5v"/><path class="mksbflonw"/><path class="g98l1dbzi"/><path class="x4n0n34se"/><circle class="wbcqrvmba"/><path class="reb7a6bqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:man-health-worker-light-skin-tone"} {...others} />);
}

export default Component;
