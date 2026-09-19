import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/cx9cnc_3r.css';
import '../../css/y/yx4dqrbvg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><rect class="cx9cnc_3r"/><path class="yx4dqrbvg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:basketball-stand"} {...others} />);
}

export default Component;
