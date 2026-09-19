import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/q0j0rac5y.css';
import '../../css/p/pgybz7brd.css';
import '../../css/c/cnwdk_ewy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="q0j0rac5y"/><path class="pgybz7brd"/><path class="cnwdk_ewy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:airplane-window"} {...others} />);
}

export default Component;
