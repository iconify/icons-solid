import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wjuoup6qs.css';
import '../../css/t/tazr0wunn.css';
import '../../css/j/j16pcib4s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wjuoup6qs"/><path class="tazr0wunn"/><path class="j16pcib4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:convert-three-d-cube"} {...others} />);
}

export default Component;
