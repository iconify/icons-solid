import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iihjozbfc.css';
import '../../css/t/ty7j1t4-k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="iihjozbfc"/><path class="ty7j1t4-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:air-traffic-control"} {...others} />);
}

export default Component;
