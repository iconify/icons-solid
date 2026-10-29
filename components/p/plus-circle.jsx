import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u7gjvzbxm.css';
import '../../css/s/stegm-3sq.css';
import '../../css/v/vdq_x6f8d.css';
import '../../css/r/rk8f4faaa.css';
import '../../css/h/h-sdu4b6o.css';
import '../../css/c/cgbv1cb4b.css';
import '../../css/n/nofwbdbos.css';
import '../../css/k/kpastrv5h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u7gjvzbxm wm-shadow"/><path class="stegm-3sq wm-k"/><path class="vdq_x6f8d wm-k"/><path class="rk8f4faaa wm-k"/><path class="h-sdu4b6o wm-k"/><path class="cgbv1cb4b wm-k"/><path class="nofwbdbos wm-shine"/><path class="kpastrv5h wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:plus-circle"} {...others} />);
}

export default Component;
