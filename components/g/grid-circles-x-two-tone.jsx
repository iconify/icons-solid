import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vt-o15bxl.css';
import '../../css/a/aku065pvk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vt-o15bxl"/><path class="aku065pvk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:grid-circles-x-two-tone"} {...others} />);
}

export default Component;
