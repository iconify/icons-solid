import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/xr61_3bgp.css';
import '../../css/i/ig18oqu2v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="xr61_3bgp"/><path class="ig18oqu2v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:popcorn-one"} {...others} />);
}

export default Component;
