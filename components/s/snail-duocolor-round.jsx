import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/leki8j95v.css';
import '../../css/y/y2evo6q0r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="leki8j95v"/><path class="y2evo6q0r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:snail-duocolor-round"} {...others} />);
}

export default Component;
