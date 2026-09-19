import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/ppnsmquwj.css';
import '../../css/n/n6_bxqb3s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ppnsmquwj"/><path class="n6_bxqb3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:graduation-cap"} {...others} />);
}

export default Component;
