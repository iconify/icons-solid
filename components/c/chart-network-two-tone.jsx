import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/luygz3g7s.css';
import '../../css/x/x9emg4bdv.css';
import '../../css/z/z_xkh2b7b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="luygz3g7s"/><path class="x9emg4bdv"/><path class="z_xkh2b7b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-network-two-tone"} {...others} />);
}

export default Component;
