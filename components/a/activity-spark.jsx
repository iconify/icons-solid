import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g2bhzsius.css';
import '../../css/t/td99pu0vk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="g2bhzsius"/><path class="td99pu0vk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:activity-spark"} {...others} />);
}

export default Component;
