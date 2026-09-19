import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/inkjmjhqc.css';
import '../../css/y/yiov8cc-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="inkjmjhqc"/><path class="yiov8cc-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:headset-bolt"} {...others} />);
}

export default Component;
