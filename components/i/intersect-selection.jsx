import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/ihrkb6bvf.css';
import '../../css/c/c12_yhz0x.css';
import '../../css/c/csl8jugbq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><rect class="ihrkb6bvf"/><rect class="c12_yhz0x"/><path class="csl8jugbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:intersect-selection"} {...others} />);
}

export default Component;
