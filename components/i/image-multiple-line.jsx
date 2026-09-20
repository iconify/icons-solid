import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u791mbc2b.css';
import '../../css/g/glaxh1b0z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u791mbc2b"/><path class="glaxh1b0z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:image-multiple-line"} {...others} />);
}

export default Component;
