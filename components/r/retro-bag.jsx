import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/midqvbcgl.css';
import '../../css/r/rmj10z9cb.css';
import '../../css/r/r47dkf1hc.css';
import '../../css/z/zd46sgbja.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="midqvbcgl"/><path class="rmj10z9cb"/><path class="r47dkf1hc"/><path class="zd46sgbja"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:retro-bag"} {...others} />);
}

export default Component;
