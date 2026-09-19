import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/agayz9gez.css';
import '../../css/h/hs_jfw7_f.css';
import '../../css/a/ah_6m4b9y.css';
import '../../css/z/znqhry37n.css';
import '../../css/q/q-pjf2_2m.css';
import '../../css/x/x3k3alz8i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="agayz9gez"/><path clip-rule="evenodd" class="hs_jfw7_f"/><path clip-rule="evenodd" class="ah_6m4b9y"/><path class="znqhry37n"/><path class="q-pjf2_2m"/><path class="x3k3alz8i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:vascular-surgery2x-outline"} {...others} />);
}

export default Component;
