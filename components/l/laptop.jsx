import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/ld7frb8bm.css';
import '../../css/q/qc7hpnzde.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="ld7frb8bm"/><path class="qc7hpnzde"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:laptop"} {...others} />);
}

export default Component;
