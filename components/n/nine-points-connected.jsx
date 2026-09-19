import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/y/yez-whi-k.css';
import '../../css/t/tecd9cbwk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="yez-whi-k"/><path class="tecd9cbwk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:nine-points-connected"} {...others} />);
}

export default Component;
