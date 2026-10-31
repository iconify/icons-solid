import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sf_pqvhgl.css';
import '../../css/f/fdzwh2bsk.css';
import '../../css/z/zg-559b4t.css';
import '../../css/l/lbmjdvbfh.css';
import '../../css/s/saarc_b6c.css';
import '../../css/c/c__4y5rmm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="sf_pqvhgl wm-shadow"/><path class="fdzwh2bsk"/><path class="zg-559b4t"/><path class="lbmjdvbfh"/><path class="saarc_b6c"/><path class="c__4y5rmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:thumbs-down"} {...others} />);
}

export default Component;
