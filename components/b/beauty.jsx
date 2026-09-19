import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/ueqtqjl_z.css';
import '../../css/y/y0x2icc-z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="ueqtqjl_z"/><path class="y0x2icc-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:beauty"} {...others} />);
}

export default Component;
