import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/j/j4cvtu_gj.css';
import '../../css/k/kagyhebbk.css';
import '../../css/t/tot9b3b8d.css';
import '../../css/o/o2ilxycix.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="j4cvtu_gj"/><path class="kagyhebbk"/><circle class="tot9b3b8d"/><path class="o2ilxycix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:permissions"} {...others} />);
}

export default Component;
