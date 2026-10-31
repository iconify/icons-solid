import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d10gawkwd.css';
import '../../css/d/dzc6xt3fy.css';
import '../../css/p/pr4nx7bcs.css';
import '../../css/h/h9f-embkm.css';
import '../../css/n/nb4ayrbbj.css';
import '../../css/u/uhi1l6rly.css';
import '../../css/l/l07e-dbcb.css';
import '../../css/b/bs_l45x8r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d10gawkwd wm-k"/><path class="dzc6xt3fy wm-s"/><path class="pr4nx7bcs wm-k"/><path class="h9f-embkm wm-s"/><path class="nb4ayrbbj wm-shadow"/><path class="uhi1l6rly wm-shine"/><path class="l07e-dbcb wm-shine"/><path class="bs_l45x8r wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:mail-search"} {...others} />);
}

export default Component;
