import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ofpokoiuq.css';
import '../../css/j/jp7xb6-ci.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ofpokoiuq"/><path class="jp7xb6-ci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:eagle-duocolor-round"} {...others} />);
}

export default Component;
