import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qk33aoacr.css';
import '../../css/h/h_q1rcciu.css';
import '../../css/a/aw_499bet.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="qk33aoacr"/><path class="h_q1rcciu"/><path class="aw_499bet"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-double-alt-arrow-up-bold-duotone"} {...others} />);
}

export default Component;
