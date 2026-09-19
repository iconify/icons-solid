import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d5uxspbsz.css';
import '../../css/d/d-wxtvbko.css';
import '../../css/u/u08m17z2o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="d5uxspbsz"/><path class="d-wxtvbko"/><path clip-rule="evenodd" class="u08m17z2o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:cholera2x-outline"} {...others} />);
}

export default Component;
