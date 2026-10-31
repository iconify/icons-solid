import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rshakfbrf.css';
import '../../css/z/z_5r_ibhj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rshakfbrf"/><path class="z_5r_ibhj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:wrench-duocolor-round"} {...others} />);
}

export default Component;
