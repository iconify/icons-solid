import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c5ky8wsla.css';
import '../../css/h/h5b29obqj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="c5ky8wsla"/><path class="h5b29obqj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:slider-3-duocolor-round"} {...others} />);
}

export default Component;
