import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/ok0fmmf9p.css';
import '../../css/y/yulr7db-p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ok0fmmf9p"/><path class="yulr7db-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:life-buoy"} {...others} />);
}

export default Component;
