import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/n/nalfbrbnz.css';
import '../../css/p/p620f_0bx.css';
import '../../css/p/p5eipvbsq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><circle class="nalfbrbnz"/><path class="p620f_0bx"/><path class="p5eipvbsq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:fm"} {...others} />);
}

export default Component;
