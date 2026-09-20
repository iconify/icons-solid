import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/s/s0nmlsbuk.css';
import '../../css/m/m52lrpbxp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="s0nmlsbuk"/><path class="m52lrpbxp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:hand-pointer-sharp-two-tone"} {...others} />);
}

export default Component;
