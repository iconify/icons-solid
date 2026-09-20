import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/u4vh7gcjc.css';
import '../../css/d/dnl8j0wnh.css';
import '../../css/u/u6t3q4b3i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="u4vh7gcjc"/><path class="dnl8j0wnh"/><path class="u6t3q4b3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:user-cirlce-add"} {...others} />);
}

export default Component;
