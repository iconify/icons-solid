import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/tmnzncb-z.css';
import '../../css/j/jkm_m-thm.css';
import '../../css/d/dzx1e0bkm.css';
import '../../css/q/qschp8bbv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="tmnzncb-z"/><path class="jkm_m-thm"/><path class="dzx1e0bkm"/><path class="qschp8bbv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:rotating-forward"} {...others} />);
}

export default Component;
