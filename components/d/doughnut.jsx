import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/m/muvtlrodu.css';
import '../../css/d/d03q2nt3l.css';
import '../../css/z/zvtazzblk.css';
import '../../css/t/tu-lmhbyv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><circle class="muvtlrodu"/><circle class="d03q2nt3l"/><path class="zvtazzblk"/><path class="tu-lmhbyv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:doughnut"} {...others} />);
}

export default Component;
