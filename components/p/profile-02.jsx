import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/w/wq7ql5aqb.css';
import '../../css/j/ju26b1bmr.css';
import '../../css/n/njt-x4eke.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="wq7ql5aqb"/><path class="ju26b1bmr"/><path class="njt-x4eke"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:profile-02"} {...others} />);
}

export default Component;
