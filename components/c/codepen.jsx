import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yc3g09_ey.css';
import '../../css/r/r7kf4-bgn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yc3g09_ey"/><path class="r7kf4-bgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:codepen"} {...others} />);
}

export default Component;
