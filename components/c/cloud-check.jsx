import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wmdergcsg.css';
import '../../css/v/vg7ao-5vt.css';
import '../../css/v/v6spmpnqx.css';
import '../../css/s/s_hpxbass.css';
import '../../css/f/fp9afvbbf.css';
import '../../css/c/c1pmzsbjf.css';
import '../../css/x/x5aw55ied.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k wmdergcsg"/><path class="vg7ao-5vt wm-k"/><path class="v6spmpnqx wm-k"/><path class="s_hpxbass wm-shine"/><path class="fp9afvbbf wm-s"/><path class="c1pmzsbjf wm-s"/><path class="wm-s x5aw55ied"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:cloud-check"} {...others} />);
}

export default Component;
