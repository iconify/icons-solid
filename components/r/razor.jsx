import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/lj8xgwb9t.css';
import '../../css/k/kooq7hlhc.css';
import '../../css/e/e814sabwa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><rect class="lj8xgwb9t"/><path class="kooq7hlhc"/><path class="e814sabwa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:razor"} {...others} />);
}

export default Component;
