import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qes_gtm2p.css';
import '../../css/q/q7xl1wbww.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qes_gtm2p"/><path class="q7xl1wbww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:analytics-restricted-line"} {...others} />);
}

export default Component;
