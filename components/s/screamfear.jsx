import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nkh622bdk.css';
import '../../css/d/dr_tp8gfx.css';
import '../../css/o/otxt9vb3m.css';
import '../../css/r/rlcpunbld.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nkh622bdk"/><path class="dr_tp8gfx"/><path class="otxt9vb3m"/><path class="rlcpunbld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:screamfear"} {...others} />);
}

export default Component;
