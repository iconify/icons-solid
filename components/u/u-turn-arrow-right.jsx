import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jvqu75bgc.css';
import '../../css/r/r46z43bxj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jvqu75bgc"/><path class="r46z43bxj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:u-turn-arrow-right"} {...others} />);
}

export default Component;
