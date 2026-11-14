import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yfe589b9i.css';
import '../../css/e/ejwve6bvh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yfe589b9i"/><path class="ejwve6bvh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-scheduling"} {...others} />);
}

export default Component;
