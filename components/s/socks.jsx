import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v6khytbfp.css';
import '../../css/d/dlhy_7b_q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v6khytbfp"/><path class="dlhy_7b_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:socks"} {...others} />);
}

export default Component;
