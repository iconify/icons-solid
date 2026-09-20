import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s_670eoes.css';
import '../../css/u/u_pc86o9w.css';
import '../../css/v/v0fdm9b6a.css';
import '../../css/b/be2ld5bgr.css';
import '../../css/w/wxh21vxbb.css';
import '../../css/j/jv4_fxbhf.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="s_670eoes"/><path class="u_pc86o9w"/><path class="v0fdm9b6a"/><path class="be2ld5bgr"/><path class="wxh21vxbb"/><path class="jv4_fxbhf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:industry-innovation-and-infrastructure-flat"} {...others} />);
}

export default Component;
