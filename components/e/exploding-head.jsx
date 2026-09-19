import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nqc2sqeyj.css';
import '../../css/w/wxyt6mxoz.css';
import '../../css/b/bmii-_byd.css';
import '../../css/g/grp1-8frx.css';
import '../../css/m/mxvh-r_kk.css';
import '../../css/s/sroykdbwe.css';
import '../../css/y/yqth9tbks.css';
import '../../css/l/l5z5dpbmt.css';
import '../../css/e/en8pw8b-c.css';
import '../../css/h/hls_frb6z.css';
import '../../css/w/wc2ldej-a.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="nqc2sqeyj"/><path class="wxyt6mxoz"/><path class="bmii-_byd"/><path class="grp1-8frx"/><path class="mxvh-r_kk"/><path class="sroykdbwe"/><path class="yqth9tbks"/><path class="l5z5dpbmt"/><path class="en8pw8b-c"/><path class="hls_frb6z"/><path class="wc2ldej-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:exploding-head"} {...others} />);
}

export default Component;
