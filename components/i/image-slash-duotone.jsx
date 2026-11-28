import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pyidfrbey.css';
import '../../css/s/sj2cr0ecg.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="pyidfrbey"/><path class="sj2cr0ecg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:image-slash-duotone"} {...others} />);
}

export default Component;
