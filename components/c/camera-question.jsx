import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ohg6aeb8l.css';
import '../../css/u/us-j_1bwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ohg6aeb8l"/><path class="us-j_1bwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:camera-question"} {...others} />);
}

export default Component;
