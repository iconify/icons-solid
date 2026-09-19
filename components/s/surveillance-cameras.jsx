import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/ly_whc7xv.css';
import '../../css/h/hbfbrwbos.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="ly_whc7xv"/><path class="hbfbrwbos"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:surveillance-cameras"} {...others} />);
}

export default Component;
