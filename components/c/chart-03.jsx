import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v5t5q7b6n.css';
import '../../css/d/dqolbqyyh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v5t5q7b6n"/><path class="dqolbqyyh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chart-03"} {...others} />);
}

export default Component;
