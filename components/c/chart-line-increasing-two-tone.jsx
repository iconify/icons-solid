import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x9emg4bdv.css';
import '../../css/q/qwcxzabda.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x9emg4bdv"/><path class="qwcxzabda"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-line-increasing-two-tone"} {...others} />);
}

export default Component;
