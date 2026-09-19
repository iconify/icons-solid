import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/ampnc_b6z.css';
import '../../css/c/c02b__imu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ampnc_b6z"/><path class="c02b__imu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:emoji-think-right"} {...others} />);
}

export default Component;
