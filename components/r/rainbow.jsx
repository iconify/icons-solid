import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yy3_swbuw.css';
import '../../css/g/gw4y0-bcv.css';
import '../../css/k/kbgqz7t_k.css';
import '../../css/n/noyokbo2d.css';
import '../../css/l/lgjsfkbso.css';
import '../../css/y/ycyj6tqid.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yy3_swbuw"/><path class="gw4y0-bcv"/><path class="kbgqz7t_k"/><path class="noyokbo2d"/><path class="lgjsfkbso"/><path class="ycyj6tqid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:rainbow"} {...others} />);
}

export default Component;
