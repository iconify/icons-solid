import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/d70npacrz.css';
import '../../css/l/l8-q0ccsa.css';
import '../../css/k/k-3466b-a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="d70npacrz"/><path class="l8-q0ccsa"/><path class="k-3466b-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:map-road-two"} {...others} />);
}

export default Component;
