import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/u1m_hydnn.css';
import '../../css/v/vq3xrxbjv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="u1m_hydnn"/><path class="vq3xrxbjv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:repositioning"} {...others} />);
}

export default Component;
