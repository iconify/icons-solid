import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/hwlm2kwmc.css';
import '../../css/l/ld8emebna.css';
import '../../css/x/x83hjc4qv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="hwlm2kwmc"/><path class="ld8emebna"/><rect class="x83hjc4qv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:shovel"} {...others} />);
}

export default Component;
