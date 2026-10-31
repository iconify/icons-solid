import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bkxh8mnky.css';
import '../../css/a/ahcxkcb-s.css';
import '../../css/c/cac7lh3py.css';
import '../../css/r/rvwo4-ult.css';
import '../../css/p/p6r4rsb4e.css';
import '../../css/s/s8cvjj6nw.css';
import '../../css/o/ot1y-gbbz.css';
import '../../css/z/z3pq14dys.css';
import '../../css/w/wrsiy7bpw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bkxh8mnky wm-k"/><path class="ahcxkcb-s wm-a"/><path class="cac7lh3py wm-deco"/><path class="rvwo4-ult wm-k"/><path class="p6r4rsb4e wm-k"/><path class="s8cvjj6nw wm-a"/><path class="ot1y-gbbz wm-shadow"/><path class="wm-shine z3pq14dys"/><path class="wm-shine wrsiy7bpw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:wreath"} {...others} />);
}

export default Component;
