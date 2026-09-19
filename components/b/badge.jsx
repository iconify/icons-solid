import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/z/zrmuv0u_x.css';
import '../../css/g/grh3rlutl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="zrmuv0u_x"/><path class="grh3rlutl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:badge"} {...others} />);
}

export default Component;
