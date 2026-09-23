import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tlm7uzbdz.css';
import '../../css/f/ficd0abma.css';
import '../../css/x/xon_9ib8a.css';
import '../../css/s/sy6ei_b0s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tlm7uzbdz"/><path class="ficd0abma"/><path class="xon_9ib8a"/><path class="sy6ei_b0s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:scan-text-sparkles-two-tone"} {...others} />);
}

export default Component;
