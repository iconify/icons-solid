import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c_u0fga2r.css';
import '../../css/t/tfi6fcbzc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="c_u0fga2r"/><path class="tfi6fcbzc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:file-text-duocolor-round"} {...others} />);
}

export default Component;
