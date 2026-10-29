import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h3dlzn1qx.css';
import '../../css/r/rktw_aceq.css';
import '../../css/l/lwbeabceg.css';
import '../../css/d/d2ep08bpg.css';
import '../../css/u/unjcv7p9s.css';
import '../../css/d/dyj_7ztqw.css';
import '../../css/q/qms70x8-w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h3dlzn1qx wm-a"/><path class="rktw_aceq wm-k"/><path class="lwbeabceg wm-k"/><path class="d2ep08bpg wm-k"/><path class="unjcv7p9s wm-k"/><path class="dyj_7ztqw wm-k"/><path class="qms70x8-w wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:tree-pine"} {...others} />);
}

export default Component;
