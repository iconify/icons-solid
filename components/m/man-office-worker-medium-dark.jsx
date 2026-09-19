import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4tkahbhw.css';
import '../../css/q/qez6-c09q.css';
import '../../css/d/dnsk7ebbm.css';
import '../../css/n/nwrlovbbs.css';
import '../../css/i/ia5yt0omd.css';
import '../../css/w/wlll7qbde.css';
import '../../css/t/tuk_0nyui.css';
import '../../css/x/xsh8s3irr.css';
import '../../css/s/sb-on7i1d.css';
import '../../css/w/wdeuzrbxs.css';
import '../../css/r/rbfribbyd.css';
import '../../css/l/lc_m0ac4m.css';
import '../../css/h/hnj3yabsu.css';
import '../../css/y/yxc7w_8iq.css';
import '../../css/l/lhxvd0lwj.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="g4tkahbhw"/><path class="qez6-c09q"/><path class="dnsk7ebbm"/><path class="nwrlovbbs"/><path class="ia5yt0omd"/><path class="wlll7qbde"/><path class="tuk_0nyui"/><path class="xsh8s3irr"/><path class="sb-on7i1d"/><path class="wdeuzrbxs"/><path class="rbfribbyd"/><path class="lc_m0ac4m"/><path class="hnj3yabsu"/><path class="yxc7w_8iq"/><path class="lhxvd0lwj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:man-office-worker-medium-dark"} {...others} />);
}

export default Component;
