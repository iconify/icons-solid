import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rwwj8i_iv.css';
import '../../css/s/swqoqsywp.css';
import '../../css/c/cwk6upbkl.css';
import '../../css/v/v_6vo7bnh.css';
import '../../css/z/ztl3s4zlh.css';
import '../../css/y/y1y91_bfa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="rwwj8i_iv"/><path class="swqoqsywp"/><path class="cwk6upbkl"/><path class="v_6vo7bnh"/><path class="ztl3s4zlh"/><path class="y1y91_bfa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:share-circle-bold"} {...others} />);
}

export default Component;
