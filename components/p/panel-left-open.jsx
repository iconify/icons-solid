import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fl7uez04s.css';
import '../../css/j/jwov2ycyh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fl7uez04s"/><path class="jwov2ycyh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:panel-left-open"} {...others} />);
}

export default Component;
