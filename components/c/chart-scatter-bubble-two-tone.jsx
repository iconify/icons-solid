import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y5btkbb_w.css';
import '../../css/x/x9emg4bdv.css';
import '../../css/t/tuoen37fg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="y5btkbb_w"/><path class="x9emg4bdv"/><path class="tuoen37fg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-scatter-bubble-two-tone"} {...others} />);
}

export default Component;
