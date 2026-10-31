import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hl_mejm0r.css';
import '../../css/t/teuvcactv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hl_mejm0r"/><path class="teuvcactv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-down-from-line-duocolor-round"} {...others} />);
}

export default Component;
