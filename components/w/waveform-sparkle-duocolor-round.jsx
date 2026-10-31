import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n0gwuybdo.css';
import '../../css/v/v6exm6bcq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n0gwuybdo"/><path class="v6exm6bcq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:waveform-sparkle-duocolor-round"} {...others} />);
}

export default Component;
