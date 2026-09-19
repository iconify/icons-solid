import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yskvirclu.css';
import '../../css/w/wnu5hjbyz.css';
import '../../css/j/j7-ykzbjp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yskvirclu"/><path class="wnu5hjbyz"/><path class="j7-ykzbjp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:scale-frame-reduce"} {...others} />);
}

export default Component;
