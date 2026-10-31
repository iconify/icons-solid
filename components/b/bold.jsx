import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gi1873b_w.css';
import '../../css/r/rt0hy_jgc.css';
import '../../css/f/fznrw93km.css';
import '../../css/d/dwkt6lbnt.css';
import '../../css/n/n3wb90gtn.css';
import '../../css/x/xo6qcz6iw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="gi1873b_w wm-shadow"/><path class="rt0hy_jgc"/><path class="fznrw93km"/><path class="dwkt6lbnt"/><path class="n3wb90gtn"/><path class="xo6qcz6iw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:bold"} {...others} />);
}

export default Component;
