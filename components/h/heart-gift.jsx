import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mbejthxuy.css';
import '../../css/u/unu_j3b3e.css';
import '../../css/n/n6cd3kvvq.css';
import '../../css/y/ydfisofal.css';
import '../../css/a/am367-bxk.css';
import '../../css/m/m8v_zcc0l.css';
import '../../css/e/epo68kf5f.css';
import '../../css/k/k79frjpyx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="mbejthxuy wm-shadow"/><path class="unu_j3b3e"/><path class="n6cd3kvvq"/><path class="ydfisofal"/><path class="am367-bxk"/><path class="m8v_zcc0l wm-s"/><path class="epo68kf5f wm-s"/><path class="k79frjpyx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:heart-gift"} {...others} />);
}

export default Component;
