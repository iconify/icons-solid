import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vc_s7sh1o.css';
import '../../css/f/ftdzprkoh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vc_s7sh1o"/><path class="ftdzprkoh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:tablet-button-duocolor-round"} {...others} />);
}

export default Component;
