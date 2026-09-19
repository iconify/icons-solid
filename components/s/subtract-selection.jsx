import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/ihrkb6bvf.css';
import '../../css/j/j-91s_kmm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><rect class="ihrkb6bvf"/><path class="j-91s_kmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:subtract-selection"} {...others} />);
}

export default Component;
