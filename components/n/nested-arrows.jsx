import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/ixz03bm1z.css';
import '../../css/u/udzvdkbzh.css';
import '../../css/x/xo1ui9nyg.css';
import '../../css/l/lickvgqla.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ixz03bm1z"/><path class="udzvdkbzh"/><path class="xo1ui9nyg"/><path class="lickvgqla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:nested-arrows"} {...others} />);
}

export default Component;
