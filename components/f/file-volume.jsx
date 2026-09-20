import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/milvkg3cv.css';
import '../../css/f/f7r_-v4is.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="milvkg3cv"/><path class="f7r_-v4is"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:file-volume"} {...others} />);
}

export default Component;
