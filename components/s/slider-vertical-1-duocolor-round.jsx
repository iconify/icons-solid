import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vbbz86bxc.css';
import '../../css/i/i2-1-fp0k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vbbz86bxc"/><path class="i2-1-fp0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:slider-vertical-1-duocolor-round"} {...others} />);
}

export default Component;
