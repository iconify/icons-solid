import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/ihrkb6bvf.css';
import '../../css/c/c12_yhz0x.css';
import '../../css/u/u0j7o5bno.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><rect class="ihrkb6bvf"/><rect class="c12_yhz0x"/><path class="u0j7o5bno"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:exclude-selection"} {...others} />);
}

export default Component;
