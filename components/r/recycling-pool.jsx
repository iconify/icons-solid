import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/f/fqccj7xbq.css';
import '../../css/o/oip-mwbex.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="fqccj7xbq"/><path class="oip-mwbex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:recycling-pool"} {...others} />);
}

export default Component;
