import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/teyv8_8vu.css';
import '../../css/h/houanob1y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="teyv8_8vu"/><path class="houanob1y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:mouse-duotone"} {...others} />);
}

export default Component;
