import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/ip3i1kbac.css';
import '../../css/p/ptydo6s_m.css';
import '../../css/w/wojuw_vqb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="ip3i1kbac"/><path class="ptydo6s_m"/><path class="wojuw_vqb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:scallion"} {...others} />);
}

export default Component;
