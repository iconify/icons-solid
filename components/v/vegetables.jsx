import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/a008irbqj.css';
import '../../css/w/wjmydx_nr.css';
import '../../css/q/qr6637bwc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="a008irbqj"/><path class="wjmydx_nr"/><path class="qr6637bwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:vegetables"} {...others} />);
}

export default Component;
