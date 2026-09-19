import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c02b__imu.css';
import '../../css/p/p9-zrkb4g.css';
import '../../css/f/fdpjff5dn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c02b__imu"/><path class="p9-zrkb4g"/><path class="fdpjff5dn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:emoji-sad"} {...others} />);
}

export default Component;
