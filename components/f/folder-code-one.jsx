import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/r00m7gbsq.css';
import '../../css/p/pzvgm_lxf.css';
import '../../css/p/pxh5q5bfp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="r00m7gbsq"/><path class="pzvgm_lxf"/><path class="pxh5q5bfp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:folder-code-one"} {...others} />);
}

export default Component;
