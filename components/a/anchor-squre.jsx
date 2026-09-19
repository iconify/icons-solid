import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/e9bm3i9jh.css';
import '../../css/t/trdpk-b6y.css';
import '../../css/l/lpi2p7bmg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="e9bm3i9jh"/><circle class="trdpk-b6y"/><path class="lpi2p7bmg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:anchor-squre"} {...others} />);
}

export default Component;
