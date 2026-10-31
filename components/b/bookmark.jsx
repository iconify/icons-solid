import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/apvn6gbxs.css';
import '../../css/i/itmurb5or.css';
import '../../css/h/h1627kbhz.css';
import '../../css/h/h-nrvbcwm.css';
import '../../css/y/yhfh1ccbe.css';
import '../../css/d/dha7idbzh.css';
import '../../css/e/egwk90b-z.css';
import '../../css/l/lv3ibp37b.css';
import '../../css/q/q0tddob0h.css';
import '../../css/e/ep-tem3qn.css';
import '../../css/c/cm9gynb1q.css';
import '../../css/s/s1agm2b2r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="apvn6gbxs wm-shadow"/><path class="itmurb5or"/><path class="h1627kbhz"/><path class="h-nrvbcwm"/><path class="yhfh1ccbe"/><path class="dha7idbzh"/><path class="egwk90b-z"/><path class="lv3ibp37b"/><path class="q0tddob0h"/><path class="ep-tem3qn"/><path class="cm9gynb1q wm-shine"/><path class="s1agm2b2r wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:bookmark"} {...others} />);
}

export default Component;
