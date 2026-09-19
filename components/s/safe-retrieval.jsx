import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/a/adxs15bqu.css';
import '../../css/v/vay9-8v2p.css';
import '../../css/n/n3f4a3bix.css';
import '../../css/t/t0uw7wbmr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="adxs15bqu"/><path class="vay9-8v2p"/><path class="n3f4a3bix"/><path class="t0uw7wbmr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:safe-retrieval"} {...others} />);
}

export default Component;
