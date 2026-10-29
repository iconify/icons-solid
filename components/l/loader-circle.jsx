import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i6ekvsb6a.css';
import '../../css/x/xz0hyzbjz.css';
import '../../css/n/nwc_68bsk.css';
import '../../css/n/nk69i7boj.css';
import '../../css/f/fef44ybap.css';
import '../../css/j/jec_jvb8f.css';
import '../../css/j/jb0wwabfk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i6ekvsb6a wm-shadow"/><path class="wm-k xz0hyzbjz"/><path class="nwc_68bsk wm-k"/><path class="nk69i7boj wm-k"/><path class="fef44ybap wm-k"/><path class="jec_jvb8f wm-k"/><path class="jb0wwabfk wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-gothic:loader-circle"} {...others} />);
}

export default Component;
