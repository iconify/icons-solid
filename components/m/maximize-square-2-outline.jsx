import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ezl73fbik.css';
import '../../css/u/uzsfyvbpo.css';
import '../../css/v/vq-hpzb2x.css';
import '../../css/o/oaxy24_qm.css';
import '../../css/u/u5bqo67kp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ezl73fbik"/><path class="uzsfyvbpo"/><path class="vq-hpzb2x"/><path class="oaxy24_qm"/><path clip-rule="evenodd" class="u5bqo67kp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:maximize-square-2-outline"} {...others} />);
}

export default Component;
