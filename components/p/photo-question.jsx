import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tm-gl6bcp.css';
import '../../css/q/qgrshsbzs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tm-gl6bcp"/><path class="qgrshsbzs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:photo-question"} {...others} />);
}

export default Component;
