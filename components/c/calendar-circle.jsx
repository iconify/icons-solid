import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/r/r4jkcab4b.css';
import '../../css/d/du5byunta.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="r4jkcab4b"/><path class="du5byunta"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:calendar-circle"} {...others} />);
}

export default Component;
