import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lx0hmmb6h.css';
import '../../css/o/ou_3i7b_k.css';
import '../../css/l/lzv070wxo.css';
import '../../css/r/rp3h3sb9m.css';
import '../../css/h/hzx976b_d.css';
import '../../css/v/vjtv2glaa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="lx0hmmb6h wm-shadow"/><path class="ou_3i7b_k"/><path class="lzv070wxo"/><path class="rp3h3sb9m"/><path class="hzx976b_d"/><path class="vjtv2glaa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:mithai-box"} {...others} />);
}

export default Component;
