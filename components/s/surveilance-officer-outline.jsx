import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h5vn5qz0x.css';
import '../../css/v/v_x350b_j.css';
import '../../css/n/ndwopbc4m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="h5vn5qz0x"/><path class="v_x350b_j"/><path clip-rule="evenodd" class="ndwopbc4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:surveilance-officer-outline"} {...others} />);
}

export default Component;
