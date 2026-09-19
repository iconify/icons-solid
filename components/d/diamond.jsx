import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/b0ca8mbrs.css';
import '../../css/o/ootyit3-w.css';
import '../../css/d/dl3t79q_z.css';
import '../../css/s/sob8e-jxb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path clip-rule="evenodd" class="b0ca8mbrs"/><path class="ootyit3-w"/><path class="dl3t79q_z"/><path class="sob8e-jxb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:diamond"} {...others} />);
}

export default Component;
