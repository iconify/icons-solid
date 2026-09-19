import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ii3k5cbmm.css';
import '../../css/u/ub2pb67pp.css';
import '../../css/x/x-344ld-n.css';
import '../../css/x/xft9p2bsj.css';
import '../../css/h/hj_8jfbpw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ii3k5cbmm"/><path class="ub2pb67pp"/><path class="x-344ld-n"/><path class="xft9p2bsj"/><path class="hj_8jfbpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:bullhorn"} {...others} />);
}

export default Component;
