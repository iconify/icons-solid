import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u6c_mxbde.css';
import '../../css/z/za799wbjz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u6c_mxbde"/><path class="za799wbjz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:hard-hat-duocolor-round"} {...others} />);
}

export default Component;
