import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cfgyg9btk.css';
import '../../css/b/bstqghbvc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cfgyg9btk"/><path class="bstqghbvc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:stone"} {...others} />);
}

export default Component;
