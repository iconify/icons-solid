import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b0u0gldjc.css';
import '../../css/w/w7jfgob2q.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/r/rtvzzmbld.css';
import '../../css/x/xnl3i3bcu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b0u0gldjc"/><path class="w7jfgob2q"/><g class="xtpeb-edw"><path class="rtvzzmbld"/><path class="xnl3i3bcu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sort-from-top-to-bottom-bold-duotone"} {...others} />);
}

export default Component;
