import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/xik1b2bwz.css';
import '../../css/s/sb50wfbey.css';
import '../../css/c/cldpi5btu.css';
import '../../css/j/je0y_cbze.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="xik1b2bwz"/><path class="sb50wfbey"/><path class="cldpi5btu"/><path class="je0y_cbze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:click-to-fold"} {...others} />);
}

export default Component;
