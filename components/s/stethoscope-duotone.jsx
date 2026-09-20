import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/me86ccc_a.css';
import '../../css/f/f4s_wibfo.css';
import '../../css/x/x-yo1fvtj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><circle class="me86ccc_a"/><path class="f4s_wibfo"/><path class="x-yo1fvtj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:stethoscope-duotone"} {...others} />);
}

export default Component;
