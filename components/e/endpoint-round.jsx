import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/oikz_hy6r.css';
import '../../css/l/ly5956p2q.css';
import '../../css/t/tz4ek_gwc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="oikz_hy6r"/><circle class="ly5956p2q"/><path class="tz4ek_gwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:endpoint-round"} {...others} />);
}

export default Component;
