import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/eb74qu_lk.css';
import '../../css/i/i39lovd2f.css';
import '../../css/e/ev2_qyd-t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="eb74qu_lk"/><path class="i39lovd2f"/><path class="ev2_qyd-t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:download"} {...others} />);
}

export default Component;
