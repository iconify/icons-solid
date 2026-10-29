import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/ncjp18bwi.css';
import '../../css/z/zhjby8xue.css';
import '../../css/v/vs77whb3h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ncjp18bwi wm-deco"/><path class="wm-deco zhjby8xue"/><path class="vs77whb3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:infinity-blueprint"} {...others} />);
}

export default Component;
