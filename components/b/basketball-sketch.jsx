import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bc2a5pb0l.css';
import '../../css/t/timyirbcb.css';
import '../../css/l/lf5_obwyo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="bc2a5pb0l"/><path class="timyirbcb wm-k"/><path class="lf5_obwyo wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:basketball-sketch"} {...others} />);
}

export default Component;
