import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/luygz3g7s.css';
import '../../css/p/p53xcyb3q.css';
import '../../css/z/z_xkh2b7b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="luygz3g7s"/><path class="p53xcyb3q"/><path class="z_xkh2b7b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-network-sharp-two-tone"} {...others} />);
}

export default Component;
