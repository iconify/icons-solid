import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/d_ssvo4cj.css';
import '../../css/c/cx-drzi7n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="d_ssvo4cj"/><path class="cx-drzi7n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:graphic-stitching-three"} {...others} />);
}

export default Component;
