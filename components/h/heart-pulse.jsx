import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iai9exbrk.css';
import '../../css/k/kypn6thrd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="iai9exbrk"/><path class="kypn6thrd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:heart-pulse"} {...others} />);
}

export default Component;
