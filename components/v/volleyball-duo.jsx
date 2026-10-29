import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oan3fnbps.css';
import '../../css/n/nvd001kpk.css';
import '../../css/r/rh0yae0_z.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/p/pbosfmb2g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="oan3fnbps"/><path class="nvd001kpk wm-a"/><path class="rh0yae0_z wm-a"/><path class="yw4fz_b6b"/><path class="pbosfmb2g wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:volleyball-duo"} {...others} />);
}

export default Component;
