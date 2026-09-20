import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/accoaib0l.css';
import '../../css/c/c7h2m3bhv.css';
import '../../css/g/g7cfs_bxo.css';
import '../../css/q/quit56b-v.css';
import '../../css/d/d2qyaetni.css';
import '../../css/i/ib_7g_bls.css';
import '../../css/y/y64o37cjf.css';
import '../../css/w/w07g__bal.css';
import '../../css/y/yinqz0wlr.css';
import '../../css/p/pq3yagbnb.css';
import '../../css/i/ibfllzbac.css';
import '../../css/x/xv-don-_s.css';
import '../../css/n/nhwhmrb_y.css';
import '../../css/k/k5hxnyb6r.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="accoaib0l"/><path class="c7h2m3bhv"/><path class="g7cfs_bxo"/><path class="quit56b-v"/><path class="d2qyaetni"/><path class="ib_7g_bls"/><path class="y64o37cjf"/><path class="w07g__bal"/><path class="yinqz0wlr"/><path class="pq3yagbnb"/><path class="ibfllzbac"/><path class="xv-don-_s"/><path class="nhwhmrb_y"/><path class="k5hxnyb6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:couple-with-heart-man-man-medium-dark-skin-tone-light-skin-tone"} {...others} />);
}

export default Component;
