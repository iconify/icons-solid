import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zndqvpbov.css';
import '../../css/r/rhuoe4b_p.css';
import '../../css/u/uaborlbrw.css';
import '../../css/n/nbwsovhqz.css';
import '../../css/s/sd_f8ub8r.css';
import '../../css/e/e3qfv6b8i.css';
import '../../css/h/h29_2obov.css';
import '../../css/a/ax0545b8g.css';
import '../../css/t/t3la6uaim.css';
import '../../css/c/c7-412bra.css';
import '../../css/s/s970ahb7h.css';
import '../../css/n/na8e85b_t.css';
import '../../css/h/h37snnk5p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k zndqvpbov"/><path class="rhuoe4b_p wm-k"/><path class="uaborlbrw wm-k"/><path class="nbwsovhqz wm-shine"/><path class="sd_f8ub8r wm-k"/><path class="e3qfv6b8i wm-k"/><path class="h29_2obov wm-k"/><path class="ax0545b8g wm-shine"/><path class="t3la6uaim wm-a"/><path class="c7-412bra wm-a"/><path class="s970ahb7h wm-a"/><path class="na8e85b_t wm-shine"/><path class="h37snnk5p wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:christmas-tree"} {...others} />);
}

export default Component;
