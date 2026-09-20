import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h_qzm70hz.css';
import '../../css/v/vtr87b2ik.css';
import '../../css/c/cllgogb_y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="h_qzm70hz"/><path class="vtr87b2ik"/><path clip-rule="evenodd" class="cllgogb_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:binoculars-bold"} {...others} />);
}

export default Component;
