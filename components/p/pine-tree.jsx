import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjnn37b9t.css';
import '../../css/q/q_nl7pbwb.css';
import '../../css/y/yg_xdybpw.css';
import '../../css/w/wwqg5ac0a.css';
import '../../css/e/e756wccfq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yjnn37b9t"/><path class="q_nl7pbwb"/><path class="yg_xdybpw"/><path class="wwqg5ac0a"/><path class="e756wccfq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:pine-tree"} {...others} />);
}

export default Component;
