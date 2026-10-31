import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vf402t8js.css';
import '../../css/o/olw6_1bxo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vf402t8js"/><path class="olw6_1bxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:linkedin-duocolor-round"} {...others} />);
}

export default Component;
