import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yqknpab5q.css';
import '../../css/j/j-fop-byt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yqknpab5q"/><path class="j-fop-byt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pillow"} {...others} />);
}

export default Component;
