import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/db_-e2bok.css';
import '../../css/j/j78e8ccwp.css';
import '../../css/b/bv7xg8rnx.css';
import '../../css/e/efmxfq_mu.css';
import '../../css/c/csyvfiv7w.css';
import '../../css/h/hwdpv8bej.css';
import '../../css/m/m9gmrk2eq.css';
import '../../css/d/d3l27qb2w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="db_-e2bok wm-k"/><path class="j78e8ccwp wm-deco"/><path class="bv7xg8rnx wm-k"/><path class="efmxfq_mu wm-k"/><path class="csyvfiv7w wm-shadow"/><path class="hwdpv8bej wm-shine"/><path class="m9gmrk2eq wm-shine"/><path class="d3l27qb2w wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:message-circle-heart"} {...others} />);
}

export default Component;
