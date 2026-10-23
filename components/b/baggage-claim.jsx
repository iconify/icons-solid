import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h_wubfbjb.css';
import '../../css/e/enqzwbcfk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h_wubfbjb"/><path class="enqzwbcfk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:baggage-claim"} {...others} />);
}

export default Component;
