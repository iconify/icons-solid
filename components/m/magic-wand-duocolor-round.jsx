import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n09_q1bfx.css';
import '../../css/g/g19uql6wy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n09_q1bfx"/><path class="g19uql6wy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:magic-wand-duocolor-round"} {...others} />);
}

export default Component;
