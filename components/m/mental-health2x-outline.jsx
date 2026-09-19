import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/swx8fsbua.css';
import '../../css/n/nmq3ynjwh.css';
import '../../css/s/sknk2ccfl.css';
import '../../css/v/v5e_qsmla.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="swx8fsbua"/><path clip-rule="evenodd" class="nmq3ynjwh"/><path class="sknk2ccfl"/><path clip-rule="evenodd" class="v5e_qsmla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:mental-health2x-outline"} {...others} />);
}

export default Component;
