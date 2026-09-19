import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/q/q9rrfmswq.css';
import '../../css/k/kx983zbwf.css';
import '../../css/u/uddjpj_nf.css';
import '../../css/h/hyoqxwbcr.css';
import '../../css/p/pkuizzokp.css';
import '../../css/h/hhfblyb9t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="q9rrfmswq"/><path class="kx983zbwf"/><path class="uddjpj_nf"/><path class="hyoqxwbcr"/><path class="pkuizzokp"/><path class="hhfblyb9t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:carousel"} {...others} />);
}

export default Component;
