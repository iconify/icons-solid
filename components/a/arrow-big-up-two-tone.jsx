import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bf2_m1i_z.css';
import '../../css/h/hiyb4ab5p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bf2_m1i_z"/><path class="hiyb4ab5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-big-up-two-tone"} {...others} />);
}

export default Component;
