import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/cvp28ryrc.css';
import '../../css/v/vfem-9x1e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="cvp28ryrc"/><path class="vfem-9x1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:clothes-diapers"} {...others} />);
}

export default Component;
