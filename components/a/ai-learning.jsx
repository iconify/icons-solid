import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u2skdhutu.css';
import '../../css/j/jyqpofbtp.css';
import '../../css/v/vu7v2ythc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u2skdhutu"/><path class="jyqpofbtp"/><path class="vu7v2ythc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-learning"} {...others} />);
}

export default Component;
