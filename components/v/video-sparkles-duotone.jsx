import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qrpp1x5rl.css';
import '../../css/o/o6s-pn-vu.css';
import '../../css/s/sjqxfeb6h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qrpp1x5rl"/><path class="o6s-pn-vu"/><path class="sjqxfeb6h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:video-sparkles-duotone"} {...others} />);
}

export default Component;
