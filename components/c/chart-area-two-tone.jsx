import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k59y7bb_q.css';
import '../../css/x/x9emg4bdv.css';
import '../../css/h/h6c0vqyip.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="k59y7bb_q"/><path class="x9emg4bdv"/><path class="h6c0vqyip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-area-two-tone"} {...others} />);
}

export default Component;
