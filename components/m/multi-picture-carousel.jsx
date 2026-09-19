import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/mard8acyx.css';
import '../../css/o/odyomth0s.css';
import '../../css/j/j_n05ckxv.css';
import '../../css/o/on_7nqkpl.css';
import '../../css/v/vqhy0sbgk.css';
import '../../css/h/h5u_f-2ef.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><rect class="mard8acyx"/><path class="odyomth0s"/><path class="j_n05ckxv"/><path class="on_7nqkpl"/><path class="vqhy0sbgk"/><path class="h5u_f-2ef"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:multi-picture-carousel"} {...others} />);
}

export default Component;
