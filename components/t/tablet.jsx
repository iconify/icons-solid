import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/oxozorj5q.css';
import '../../css/t/tossrcb3i.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><rect class="oxozorj5q"/><path class="tossrcb3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:tablet"} {...others} />);
}

export default Component;
