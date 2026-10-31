import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z4sgatbsl.css';
import '../../css/z/zddl1obov.css';
import '../../css/u/u5ye6ecby.css';
import '../../css/m/mn1ueztye.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="z4sgatbsl"/><path clip-rule="evenodd" class="zddl1obov"/><path class="u5ye6ecby"/><path clip-rule="evenodd" class="mn1ueztye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:constipation-outline"} {...others} />);
}

export default Component;
