import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/ps2grmsyv.css';
import '../../css/f/fyya0nbto.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ps2grmsyv"/><path class="fyya0nbto"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:copy-check-duocolor-round"} {...others} />);
}

export default Component;
