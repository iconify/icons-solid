import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vt-o15bxl.css';
import '../../css/p/p-3t5_25j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vt-o15bxl"/><path class="p-3t5_25j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:grid-circles-check-two-tone"} {...others} />);
}

export default Component;
