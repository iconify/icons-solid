import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/dxz2t-ggx.css';
import '../../css/l/lvg5i6cmk.css';
import '../../css/e/ejgseacvx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="dxz2t-ggx"/><path class="lvg5i6cmk"/><path class="ejgseacvx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cycle-arrow"} {...others} />);
}

export default Component;
