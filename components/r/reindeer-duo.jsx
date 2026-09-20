import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wq1h-tb3p.css';
import '../../css/u/uzrrtd_qg.css';
import '../../css/t/te117eino.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="wq1h-tb3p"/><path class="uzrrtd_qg"/><path class="te117eino"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:reindeer-duo"} {...others} />);
}

export default Component;
