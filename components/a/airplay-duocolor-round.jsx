import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hwnu8acqb.css';
import '../../css/n/nbb7xactf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hwnu8acqb"/><path class="nbb7xactf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:airplay-duocolor-round"} {...others} />);
}

export default Component;
