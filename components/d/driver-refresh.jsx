import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gomdih50j.css';
import '../../css/j/j_fmtzfnk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gomdih50j"/><path class="j_fmtzfnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:driver-refresh"} {...others} />);
}

export default Component;
