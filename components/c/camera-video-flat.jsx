import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/asobheb5s.css';
import '../../css/b/b7vu_ftog.css';
import '../../css/p/pp_etefer.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="asobheb5s"/><path class="b7vu_ftog"/><path clip-rule="evenodd" class="pp_etefer"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:camera-video-flat"} {...others} />);
}

export default Component;
