import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/r/rdz5iyb4e.css';
import '../../css/k/ksiqnrbyp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="rdz5iyb4e"/><path class="ksiqnrbyp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:radar3"} {...others} />);
}

export default Component;
