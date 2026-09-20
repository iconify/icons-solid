import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/le29hpbjw.css';
import '../../css/d/dxr69bcwt.css';
import '../../css/v/vck_s2eyt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="le29hpbjw"/><path class="dxr69bcwt"/><path class="vck_s2eyt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wineglass-triangle-bold-duotone"} {...others} />);
}

export default Component;
