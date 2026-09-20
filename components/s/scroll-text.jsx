import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g5hjh9a-o.css';
import '../../css/e/ehw9fwbut.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g5hjh9a-o"/><path class="ehw9fwbut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:scroll-text"} {...others} />);
}

export default Component;
