import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/h68ut6bnw.css';
import '../../css/u/u6f03sbhm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="h68ut6bnw"/><path class="u6f03sbhm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:database-network-point"} {...others} />);
}

export default Component;
