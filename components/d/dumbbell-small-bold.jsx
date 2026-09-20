import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jk_ilebcr.css';
import '../../css/n/nla-zwgun.css';
import '../../css/t/tflq_qa9n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="jk_ilebcr"/><path class="nla-zwgun"/><path class="tflq_qa9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dumbbell-small-bold"} {...others} />);
}

export default Component;
