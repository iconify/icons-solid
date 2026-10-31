import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r805trlnc.css';
import '../../css/v/vde49ebwh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r805trlnc"/><path class="vde49ebwh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:mars-duocolor-round"} {...others} />);
}

export default Component;
