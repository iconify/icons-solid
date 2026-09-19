import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/u-315tb8l.css';
import '../../css/c/c02b__imu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="u-315tb8l"/><path class="c02b__imu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:emoji-think-left"} {...others} />);
}

export default Component;
