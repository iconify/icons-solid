import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/os1b0yi3n.css';
import '../../css/m/mn_xh7wcg.css';
import '../../css/c/cpfti_bay.css';
import '../../css/g/gmzg_8bzq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="os1b0yi3n"/><path class="mn_xh7wcg"/><path class="cpfti_bay"/><path class="gmzg_8bzq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:multi-triangular-three"} {...others} />);
}

export default Component;
