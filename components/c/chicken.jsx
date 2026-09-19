import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/t/tkm1l-bce.css';
import '../../css/y/youbn_grx.css';
import '../../css/r/rp_k0sd-q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="tkm1l-bce"/><path class="youbn_grx"/><path class="rp_k0sd-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:chicken"} {...others} />);
}

export default Component;
