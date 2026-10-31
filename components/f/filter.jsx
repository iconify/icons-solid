import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wr_by8i1o.css';
import '../../css/y/ydv47vrwr.css';
import '../../css/s/so5se699i.css';
import '../../css/g/ginvxf0bu.css';
import '../../css/d/dqu3lv7od.css';
import '../../css/b/byocxdbya.css';
import '../../css/i/imjdtmnzn.css';
import '../../css/d/d-g3t3gyi.css';
import '../../css/q/quz3v9k4j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow wr_by8i1o"/><path class="wm-deco ydv47vrwr"/><path class="so5se699i wm-deco"/><path class="ginvxf0bu wm-deco"/><path class="dqu3lv7od wm-k"/><path class="byocxdbya wm-k"/><path class="imjdtmnzn wm-k"/><path class="d-g3t3gyi wm-k"/><path class="quz3v9k4j wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:filter"} {...others} />);
}

export default Component;
