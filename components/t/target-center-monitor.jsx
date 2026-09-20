import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gy6xh0byw.css';
import '../../css/p/p6g4mh8-s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gy6xh0byw"/><path class="p6g4mh8-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:target-center-monitor"} {...others} />);
}

export default Component;
