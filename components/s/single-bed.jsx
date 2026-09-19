import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/f/f2ykp2y6k.css';
import '../../css/s/s6_2p-rxf.css';
import '../../css/s/s0vg7idxu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="f2ykp2y6k"/><path class="s6_2p-rxf"/><path class="s0vg7idxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:single-bed"} {...others} />);
}

export default Component;
