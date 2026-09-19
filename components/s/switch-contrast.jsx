import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/xkr83qm4x.css';
import '../../css/n/nm8f33m8x.css';
import '../../css/k/ktt-wx2-u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="xkr83qm4x"/><path class="nm8f33m8x"/><path class="ktt-wx2-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:switch-contrast"} {...others} />);
}

export default Component;
