import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oiuiv5blj.css';
import '../../css/s/shv3ws-ls.css';
import '../../css/i/i0hrabppd.css';
import '../../css/m/meelv53to.css';
import '../../css/r/rt9v9sb0t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oiuiv5blj wm-k"/><path class="shv3ws-ls wm-shine"/><path class="i0hrabppd wm-shine"/><path class="meelv53to wm-shine"/><path class="rt9v9sb0t wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:folder-plus"} {...others} />);
}

export default Component;
