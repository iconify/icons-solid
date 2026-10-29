import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ee4vy5biw.css';
import '../../css/h/ha9tzhqmj.css';
import '../../css/a/a6ptodb2a.css';
import '../../css/t/tpiytj_7d.css';
import '../../css/y/yesylm71z.css';
import '../../css/f/ft3cf-jmh.css';
import '../../css/s/s8-c4ybmw.css';
import '../../css/h/hh1h7vp_l.css';
import '../../css/v/vuc8zpb2x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ee4vy5biw wm-k"/><path class="ha9tzhqmj wm-k"/><path class="a6ptodb2a wm-k"/><path class="tpiytj_7d wm-s"/><path class="wm-s yesylm71z"/><path class="ft3cf-jmh wm-s"/><path class="s8-c4ybmw wm-shine"/><path class="hh1h7vp_l wm-deco"/><path class="vuc8zpb2x wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:text-sparkles"} {...others} />);
}

export default Component;
