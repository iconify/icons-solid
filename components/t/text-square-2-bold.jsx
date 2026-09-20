import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sq3wmbbua.css';
import '../../css/b/b1dzrc5_p.css';
import '../../css/m/myornmb0s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="sq3wmbbua"/><path class="b1dzrc5_p"/><path class="myornmb0s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-square-2-bold"} {...others} />);
}

export default Component;
