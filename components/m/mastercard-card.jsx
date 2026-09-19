import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/j5csejyzh.css';
import '../../css/y/ya_03da-k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="j5csejyzh"/><path class="ya_03da-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:mastercard-card"} {...others} />);
}

export default Component;
