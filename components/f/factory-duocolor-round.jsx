import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jw8scnbdr.css';
import '../../css/p/pb4s0mydj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jw8scnbdr"/><path class="pb4s0mydj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:factory-duocolor-round"} {...others} />);
}

export default Component;
