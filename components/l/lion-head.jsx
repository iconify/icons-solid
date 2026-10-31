import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/pzqldvmix.css';
import '../../css/m/mss46sb7n.css';
import '../../css/b/b7fq5sy9j.css';
import '../../css/o/opfyp5u3r.css';
import '../../css/l/llu9nub8p.css';
import '../../css/u/uqtzo8bzn.css';
import '../../css/c/cvy_cwbjq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="pzqldvmix wm-shadow"/><path class="mss46sb7n"/><path class="b7fq5sy9j"/><path class="opfyp5u3r"/><path class="llu9nub8p"/><path class="uqtzo8bzn"/><path class="cvy_cwbjq wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:lion-head"} {...others} />);
}

export default Component;
