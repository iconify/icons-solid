import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b0u3lcc-u.css';
import '../../css/f/fw0as8zpk.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/q/qnl0yuzbt.css';
import '../../css/o/o7jevlg6h.css';
import '../../css/d/di8dn3bsc.css';
import '../../css/p/p21w-1bfy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="b0u3lcc-u"/><path class="fw0as8zpk"/><g class="mc2zb0bvp"><path class="qnl0yuzbt"/><path class="o7jevlg6h"/><path class="di8dn3bsc"/><path class="p21w-1bfy"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:layout-list-bold-duotone"} {...others} />);
}

export default Component;
