import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ub_4qybgh.css';
import '../../css/b/bgl-ylire.css';
import '../../css/z/zyn773pub.css';
import '../../css/n/neqx3dbua.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ub_4qybgh"/><path class="bgl-ylire"/><path class="zyn773pub"/><path class="neqx3dbua"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:solid-state-disk"} {...others} />);
}

export default Component;
