import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/juun-ro-h.css';
import '../../css/z/zjaiykb3i.css';
import '../../css/q/q68uhoboz.css';
import '../../css/f/fy3fdy4ig.css';
import '../../css/j/j8se2dbli.css';
import '../../css/t/t_p30mbdv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><g class="juun-ro-h"><path clip-rule="evenodd" class="zjaiykb3i"/><path class="q68uhoboz"/></g><path class="fy3fdy4ig"/><path class="j8se2dbli"/><rect transform="matrix(0 -1 -1 0 20.98 20.8)" class="t_p30mbdv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:disc-album"} {...others} />);
}

export default Component;
