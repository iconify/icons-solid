import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vevmidywk.css';
import '../../css/r/ro5o2ffpk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vevmidywk"/><path class="ro5o2ffpk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cloud-plus-two-tone"} {...others} />);
}

export default Component;
