import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rjb55wb_o.css';
import '../../css/w/wlma3nbrc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rjb55wb_o"/><path class="wlma3nbrc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:loading-duotone-round"} {...others} />);
}

export default Component;
