import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k4ui9xrgk.css';
import '../../css/x/xqtn3zbcg.css';
import '../../css/g/gh7j6gbca.css';
import '../../css/q/qimmwqajk.css';
import '../../css/h/hsjbxm0ys.css';
import '../../css/t/toceatu_e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="k4ui9xrgk"/><path class="xqtn3zbcg"/><path clip-rule="evenodd" class="gh7j6gbca"/><path class="qimmwqajk"/><path class="hsjbxm0ys"/><path clip-rule="evenodd" class="toceatu_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:chair-4-pop"} {...others} />);
}

export default Component;
