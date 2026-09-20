import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o--g672fa.css';
import '../../css/d/dnczdob4v.css';
import '../../css/l/ls1vp1vgk.css';
import '../../css/w/wvm9ex3ps.css';
import '../../css/s/s_0jfyk2i.css';
import '../../css/d/d0ie3cc0l.css';
import '../../css/d/d_e2bnbjv.css';
import '../../css/d/dg5e8nbmx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o--g672fa"/><path class="dnczdob4v"/><path class="ls1vp1vgk"/><path class="wvm9ex3ps"/><path class="s_0jfyk2i"/><path class="d0ie3cc0l"/><path class="d_e2bnbjv"/><path class="dg5e8nbmx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:video-player-slider"} {...others} />);
}

export default Component;
