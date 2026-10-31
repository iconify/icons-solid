import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t5bihgohq.css';
import '../../css/q/q9reugbnb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t5bihgohq"/><path class="q9reugbnb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cow-duocolor-round"} {...others} />);
}

export default Component;
