import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/pmazflpze.css';
import '../../css/b/b5yxc2b_y.css';
import '../../css/t/t5aws7bsx.css';
import '../../css/e/e0_pf_bxs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><rect class="pmazflpze"/><path class="b5yxc2b_y"/><circle class="t5aws7bsx"/><circle class="e0_pf_bxs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:data-screen"} {...others} />);
}

export default Component;
