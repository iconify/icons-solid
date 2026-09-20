import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hr3_5-bzd.css';
import '../../css/o/oh9iy2vtt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hr3_5-bzd"/><path class="oh9iy2vtt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:camera-off"} {...others} />);
}

export default Component;
