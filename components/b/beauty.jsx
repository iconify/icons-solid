import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/ueqtqjl_z.css';
import '../../css/j/j4r7k_ibd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="ueqtqjl_z"/><path class="j4r7k_ibd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:beauty"} {...others} />);
}

export default Component;
