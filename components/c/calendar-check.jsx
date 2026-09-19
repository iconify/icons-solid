import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g32g42_-b.css';
import '../../css/c/cal120bak.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="g32g42_-b"/><path class="cal120bak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:calendar-check"} {...others} />);
}

export default Component;
