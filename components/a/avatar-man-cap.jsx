import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/ljv216_9i.css';
import '../../css/l/l0uw-hb3q.css';
import '../../css/n/nc1driq9q.css';
import '../../css/m/mgm4njbsi.css';
import '../../css/s/s8z1hogeo.css';
import '../../css/l/lx2rbgbsq.css';
import '../../css/p/pkm1lrbco.css';
import '../../css/k/k_wvr05bs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ljv216_9i wm-shadow"/><path class="l0uw-hb3q"/><path class="nc1driq9q"/><path class="mgm4njbsi"/><path class="s8z1hogeo"/><path class="lx2rbgbsq"/><path class="pkm1lrbco"/><path class="k_wvr05bs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:avatar-man-cap"} {...others} />);
}

export default Component;
