import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qcopjnbsv.css';
import '../../css/b/bcsyx5z-q.css';
import '../../css/d/d7hymm8of.css';
import '../../css/b/b5q3_kb_l.css';
import '../../css/a/alw8-m1lm.css';
import '../../css/q/q3wz03bhz.css';
import '../../css/v/v2ul-zm4o.css';
import '../../css/h/hs4d3c4tq.css';
import '../../css/i/i2-urhrjh.css';
import '../../css/r/rdoq35b3l.css';
import '../../css/n/nmb56hbwr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qcopjnbsv wm-shadow"/><path class="bcsyx5z-q wm-a"/><path class="d7hymm8of wm-a"/><path class="b5q3_kb_l wm-a"/><path class="alw8-m1lm wm-shine"/><path class="q3wz03bhz wm-k"/><path class="v2ul-zm4o wm-k"/><path class="hs4d3c4tq wm-k"/><path class="i2-urhrjh wm-k"/><path class="rdoq35b3l wm-shine"/><path class="nmb56hbwr wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:plane-takeoff"} {...others} />);
}

export default Component;
