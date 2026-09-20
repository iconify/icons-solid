import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jefko1b_v.css';
import '../../css/h/hhuu0x9cj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jefko1b_v"/><path class="hhuu0x9cj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:replay-two-tone"} {...others} />);
}

export default Component;
