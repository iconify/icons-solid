import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b544gtb_t.css';
import '../../css/v/v92bd3bjo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b544gtb_t"/><path class="v92bd3bjo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:motorbike-duocolor-round"} {...others} />);
}

export default Component;
