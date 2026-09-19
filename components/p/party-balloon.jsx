import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/qc0hdx2pm.css';
import '../../css/u/u0od4-lfi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="qc0hdx2pm"/><path class="u0od4-lfi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:party-balloon"} {...others} />);
}

export default Component;
