import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h_p0abc2u.css';
import '../../css/e/e0cq7z_ut.css';
import '../../css/o/oigydacdg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="h_p0abc2u"/><path clip-rule="evenodd" class="e0cq7z_ut"/><path class="oigydacdg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:skin-layers-outline"} {...others} />);
}

export default Component;
