import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wq1h-tb3p.css';
import '../../css/c/co_qzcczq.css';
import '../../css/o/oiri56m4m.css';
import '../../css/t/ta28g-b_h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="wq1h-tb3p"/><path class="co_qzcczq"/><path class="oiri56m4m"/><path class="ta28g-b_h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:pokeball-duo"} {...others} />);
}

export default Component;
