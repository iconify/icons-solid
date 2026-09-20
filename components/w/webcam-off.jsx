import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iu158ebfp.css';
import '../../css/c/c5n-du86s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="iu158ebfp"/><path class="c5n-du86s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:webcam-off"} {...others} />);
}

export default Component;
