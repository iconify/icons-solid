import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xppejxbig.css';
import '../../css/f/f5p8q8bas.css';
import '../../css/h/h32lbbezc.css';
import '../../css/b/b00jfrbef.css';
import '../../css/a/ajt0yhvqq.css';
import '../../css/h/hdepszb9f.css';
import '../../css/v/vg-_komjj.css';
import '../../css/p/p8hi_kbbb.css';
import '../../css/m/muk67ibql.css';
import '../../css/c/c50k5d41n.css';
import '../../css/p/p4mccdcpo.css';
import '../../css/f/ffircbi5a.css';
import '../../css/j/juspa9b5r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow xppejxbig"/><path class="f5p8q8bas wm-k"/><path class="h32lbbezc wm-k"/><path class="b00jfrbef wm-k"/><path class="ajt0yhvqq wm-k"/><path class="hdepszb9f wm-k"/><path class="vg-_komjj wm-shine"/><path class="p8hi_kbbb wm-a"/><path class="muk67ibql wm-a"/><path class="c50k5d41n wm-a"/><path class="p4mccdcpo wm-a"/><path class="ffircbi5a wm-a"/><path class="juspa9b5r wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:grid-2x2"} {...others} />);
}

export default Component;
