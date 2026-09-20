import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l_vfulbig.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/h/hibe8qwor.css';
import '../../css/f/f-wf32bmx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="l_vfulbig"/><g class="mc2zb0bvp"><path class="hibe8qwor"/><path class="f-wf32bmx"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:waterdrops-bold-duotone"} {...others} />);
}

export default Component;
