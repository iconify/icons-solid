import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uftxwgk8k.css';
import '../../css/u/uge61nb_g.css';
import '../../css/d/dcj5z9bdp.css';
import '../../css/v/vnsptrbkq.css';
import '../../css/u/ux37enbkr.css';
import '../../css/b/b67_bfbks.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uftxwgk8k wm-k"/><path class="uge61nb_g wm-deco"/><path class="dcj5z9bdp wm-k"/><path class="vnsptrbkq wm-shadow"/><path class="ux37enbkr wm-shine"/><path class="b67_bfbks wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:baby-bottle"} {...others} />);
}

export default Component;
