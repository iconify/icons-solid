import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s22e9fkik.css';
import '../../css/d/dne021b-x.css';
import '../../css/o/omjkpyypr.css';
import '../../css/d/dfm337b_v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s22e9fkik"/><path class="dne021b-x"/><path clip-rule="evenodd" class="omjkpyypr"/><path class="dfm337b_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:emergency-post-outline-24px"} {...others} />);
}

export default Component;
