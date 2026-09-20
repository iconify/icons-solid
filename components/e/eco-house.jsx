import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/n/nk3dl4uds.css';
import '../../css/v/vwchbrbih.css';
import '../../css/n/n44hjyu5w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="nk3dl4uds"/><path class="vwchbrbih"/><path class="n44hjyu5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:eco-house"} {...others} />);
}

export default Component;
