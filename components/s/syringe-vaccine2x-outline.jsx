import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zub42f2bw.css';
import '../../css/d/dcs2u9ork.css';
import '../../css/t/t-xa73ajk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zub42f2bw"/><path class="dcs2u9ork"/><path clip-rule="evenodd" class="t-xa73ajk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:syringe-vaccine2x-outline"} {...others} />);
}

export default Component;
