import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gb2vbco5n.css';
import '../../css/l/l1f3nlbxt.css';
import '../../css/f/fayuamame.css';
import '../../css/j/jn-yp-25u.css';
import '../../css/w/wlrgdnbef.css';
import '../../css/y/ypeum_b8e.css';
import '../../css/o/odbx_cc_o.css';
import '../../css/d/dfr-owbdl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gb2vbco5n wm-k"/><path class="l1f3nlbxt wm-deco"/><path class="fayuamame wm-k"/><path class="jn-yp-25u wm-k"/><path class="wlrgdnbef wm-shadow"/><path class="wm-shine ypeum_b8e"/><path class="odbx_cc_o wm-shine"/><path class="dfr-owbdl wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:book-open"} {...others} />);
}

export default Component;
