import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/pv_nbcc5x.css';
import '../../css/x/xr1cpub8x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="pv_nbcc5x"/><path class="xr1cpub8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:message-sent"} {...others} />);
}

export default Component;
