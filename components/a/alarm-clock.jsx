import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/u/uc806cc_b.css';
import '../../css/r/rp0tc0bpg.css';
import '../../css/f/fmadhnbwi.css';
import '../../css/o/o0qcwtbtl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="uc806cc_b"/><path class="rp0tc0bpg"/><path class="fmadhnbwi"/><path class="o0qcwtbtl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:alarm-clock"} {...others} />);
}

export default Component;
