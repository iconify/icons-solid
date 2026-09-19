import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5cg8fb9r.css';
import '../../css/o/oq8pnh08o.css';
import '../../css/m/mt4xtbcfi.css';
import '../../css/k/k1369qbgk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="y5cg8fb9r"><path class="oq8pnh08o"/><path class="mt4xtbcfi"/><path class="k1369qbgk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:soccer"} {...others} />);
}

export default Component;
