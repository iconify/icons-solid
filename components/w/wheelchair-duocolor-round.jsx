import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/et8vz1all.css';
import '../../css/p/p2ubz38vz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="et8vz1all"/><path class="p2ubz38vz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:wheelchair-duocolor-round"} {...others} />);
}

export default Component;
