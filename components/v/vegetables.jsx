import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/f/fiblbeb6f.css';
import '../../css/t/tefq-obtr.css';
import '../../css/d/dq56deh2d.css';
import '../../css/n/ny25zzbls.css';
import '../../css/q/q-iw8xbzb.css';
import '../../css/o/oqicg8euk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="fiblbeb6f"/><path class="tefq-obtr"/><path class="dq56deh2d"/><path class="ny25zzbls"/><path class="q-iw8xbzb"/><path class="oqicg8euk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:vegetables"} {...others} />);
}

export default Component;
