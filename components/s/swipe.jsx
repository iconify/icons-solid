import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/rbi3_qe2t.css';
import '../../css/l/lcxm60n5d.css';
import '../../css/f/fsgiuuxfd.css';
import '../../css/j/j0q2igbtm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="rbi3_qe2t"/><path class="lcxm60n5d"/><path class="fsgiuuxfd"/><path class="j0q2igbtm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:swipe"} {...others} />);
}

export default Component;
