import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/qi6mjobvp.css';
import '../../css/e/e7kuj4byt.css';
import '../../css/v/vzsoh8bcc.css';
import '../../css/l/lo46v06ub.css';
import '../../css/e/e9t3m_ban.css';
import '../../css/r/ry9fgfbiy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="qi6mjobvp"/><path class="e7kuj4byt"/><path class="vzsoh8bcc"/><path class="lo46v06ub"/><path class="e9t3m_ban"/><path class="ry9fgfbiy"/><line x1="13" x2="35" y1="27" y2="27"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:printer-one"} {...others} />);
}

export default Component;
