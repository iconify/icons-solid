import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uz-biobdg.css';
import '../../css/g/gugmgrnjp.css';
import '../../css/d/d09h2ubln.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="uz-biobdg"/><path class="gugmgrnjp"/><path clip-rule="evenodd" class="d09h2ubln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:car"} {...others} />);
}

export default Component;
