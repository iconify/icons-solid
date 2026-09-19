import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/t/tz9bkmbzx.css';
import '../../css/m/mnl-1wjwu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="tz9bkmbzx"/><path class="mnl-1wjwu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:rhombus-arrow-right"} {...others} />);
}

export default Component;
