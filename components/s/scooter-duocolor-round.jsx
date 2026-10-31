import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v72755vqx.css';
import '../../css/j/js34wb59d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="v72755vqx"/><path class="js34wb59d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:scooter-duocolor-round"} {...others} />);
}

export default Component;
