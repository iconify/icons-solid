import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/q2cgsdcxn.css';
import '../../css/k/k7sl3bboy.css';
import '../../css/t/ty8kmubdm.css';
import '../../css/l/lxqcwwbex.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="q2cgsdcxn"/><path class="k7sl3bboy"/><path class="ty8kmubdm"/><path class="lxqcwwbex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:headset-two"} {...others} />);
}

export default Component;
