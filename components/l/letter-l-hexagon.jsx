import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a8artlb1r.css';
import '../../css/s/sts8xrb0w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a8artlb1r"/><path class="sts8xrb0w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:letter-l-hexagon"} {...others} />);
}

export default Component;
