import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rz61hplvb.css';
import '../../css/b/bmknc5bwv.css';
import '../../css/m/mpuuhxylu.css';
import '../../css/h/h_tskvb-r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rz61hplvb"/><path clip-rule="evenodd" class="bmknc5bwv"/><path class="mpuuhxylu"/><path class="h_tskvb-r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:translation-2-bold"} {...others} />);
}

export default Component;
