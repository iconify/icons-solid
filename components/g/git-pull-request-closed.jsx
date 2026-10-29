import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sa8q7hb6p.css';
import '../../css/v/vmvicww5o.css';
import '../../css/o/o3iu6_b8t.css';
import '../../css/f/fc49-ub_t.css';
import '../../css/q/qf9ag7bzh.css';
import '../../css/y/yo9p7vb8f.css';
import '../../css/i/i0xbbfbrs.css';
import '../../css/v/vjt_7qbve.css';
import '../../css/h/hiat8jaej.css';
import '../../css/j/j0o_64b8w.css';
import '../../css/n/ny9x_l_zx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sa8q7hb6p wm-shadow"/><path class="vmvicww5o wm-k"/><path class="o3iu6_b8t wm-k"/><path class="fc49-ub_t wm-k"/><path class="qf9ag7bzh wm-k"/><path class="wm-k yo9p7vb8f"/><path class="i0xbbfbrs wm-shine"/><path class="vjt_7qbve wm-s"/><path class="hiat8jaej wm-s"/><path class="j0o_64b8w wm-s"/><path class="ny9x_l_zx wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:git-pull-request-closed"} {...others} />);
}

export default Component;
