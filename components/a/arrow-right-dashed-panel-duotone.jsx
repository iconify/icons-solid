import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ojh85yurv.css';
import '../../css/m/m88y0fhtu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ojh85yurv"/><path class="m88y0fhtu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-right-dashed-panel-duotone"} {...others} />);
}

export default Component;
