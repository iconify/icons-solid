import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s0nmlsbuk.css';
import '../../css/s/sgn_4-b3d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s0nmlsbuk"/><path class="sgn_4-b3d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:hand-pointer-two-tone"} {...others} />);
}

export default Component;
