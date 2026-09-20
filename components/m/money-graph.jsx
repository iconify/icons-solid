import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjnn37b9t.css';
import '../../css/f/fdzd_5w2a.css';
import '../../css/d/dqsdc61qg.css';
import '../../css/f/fsq8b6-ka.css';
import '../../css/y/yh6-xdbya.css';
import '../../css/p/px4n8bcne.css';
import '../../css/u/uozea2b9w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yjnn37b9t"/><path class="fdzd_5w2a"/><path class="dqsdc61qg"/><path class="fsq8b6-ka"/><path class="yh6-xdbya"/><path class="px4n8bcne"/><path class="uozea2b9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:money-graph"} {...others} />);
}

export default Component;
