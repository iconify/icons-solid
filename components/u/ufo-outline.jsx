import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/ml_n0obfa.css';
import '../../css/e/egm-6jb-e.css';
import '../../css/h/hdp-dbbeo.css';
import '../../css/u/ub1sm6b-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ml_n0obfa"/><path class="egm-6jb-e"/><path class="hdp-dbbeo"/><path class="ub1sm6b-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ufo-outline"} {...others} />);
}

export default Component;
