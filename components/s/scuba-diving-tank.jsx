import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/trt8derqw.css';
import '../../css/n/nfv5k5dpp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="trt8derqw"/><path class="nfv5k5dpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:scuba-diving-tank"} {...others} />);
}

export default Component;
