import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/znr3ebb-b.css';
import '../../css/j/j0xw9w2pq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="znr3ebb-b"/><path class="j0xw9w2pq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:rocket-vertical-two-tone"} {...others} />);
}

export default Component;
