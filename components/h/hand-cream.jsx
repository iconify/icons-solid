import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/kb9zbkb1z.css';
import '../../css/d/dpjs64bvd.css';
import '../../css/x/xo86xh92i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><circle class="kb9zbkb1z"/><path class="dpjs64bvd"/><path class="xo86xh92i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:hand-cream"} {...others} />);
}

export default Component;
