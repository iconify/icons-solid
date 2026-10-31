import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/izs2jcbci.css';
import '../../css/w/w-08odbih.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="izs2jcbci"/><path class="w-08odbih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:slider-vertical-3-duocolor-round"} {...others} />);
}

export default Component;
