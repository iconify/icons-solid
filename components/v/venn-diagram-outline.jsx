import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/j/jwvhftb8e.css';
import '../../css/e/e4b5jwbkp.css';
import '../../css/c/cx1-3ebcg.css';

const viewBox = {"width":15,"height":15};
const content = `<g class="h01tyzbfu"><path class="jwvhftb8e"/><path class="e4b5jwbkp"/><path class="cx1-3ebcg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:venn-diagram-outline"} {...others} />);
}

export default Component;
