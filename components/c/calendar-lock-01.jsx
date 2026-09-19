import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qx8fcd5nb.css';
import '../../css/i/ilelembxw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qx8fcd5nb"/><path class="ilelembxw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:calendar-lock-01"} {...others} />);
}

export default Component;
