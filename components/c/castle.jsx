import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bsqqjm9ym.css';
import '../../css/p/p0omb5qxl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bsqqjm9ym"/><path class="p0omb5qxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:castle"} {...others} />);
}

export default Component;
