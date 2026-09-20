import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rqe_u6b8h.css';
import '../../css/o/og3idps-d.css';
import '../../css/p/p_v2ihbmp.css';
import '../../css/k/kjj_oybmh.css';
import '../../css/i/i1elpcb-c.css';
import '../../css/u/ulffv1xtu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rqe_u6b8h"/><path clip-rule="evenodd" class="og3idps-d"/><path class="p_v2ihbmp"/><path clip-rule="evenodd" class="kjj_oybmh"/><path class="i1elpcb-c"/><path clip-rule="evenodd" class="ulffv1xtu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:code-monitor-2-flat"} {...others} />);
}

export default Component;
